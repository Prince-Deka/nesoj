const multer = require('multer');
const { BlobServiceClient } = require('@azure/storage-blob');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const AZURE_STORAGE_CONNECTION_STRING = `DefaultEndpointsProtocol=https;AccountName=${process.env.AZURE_STORAGE_ACCOUNT_NAME};AccountKey=${process.env.AZURE_STORAGE_ACCOUNT_KEY};EndpointSuffix=core.windows.net`;
const containerName = process.env.AZURE_STORAGE_CONTAINER_USER;

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(containerName);

// Ensure the container exists or create it
const ensureContainerExists = async () => {
  const exists = await containerClient.exists();
  if (!exists) {
    await containerClient.create();
    console.log(`Container ${containerName} created`);
  }
};

// Set up multer for file upload
const upload = multer({ storage: multer.memoryStorage() });

const uploadFilesToAzure = async (req, res, next) => {
  if (!req.files) return next();

  const uploads = [];

  if (req.files.profilePic) {
    const profilePicFile = req.files.profilePic[0];
    uploads.push(uploadToAzure(profilePicFile));
  }

  if (req.files.idFile) {
    const idFile = req.files.idFile[0];
    uploads.push(uploadToAzure(idFile));
  }

  try {
    // Ensure the container exists before uploading files
    await ensureContainerExists();

    const results = await Promise.all(uploads);
    req.body.profilePicUrl = results[0] || '';
    req.body.idFileUrl = results[1] || '';
    next();
  } catch (error) {
    console.error('Error uploading to Azure:', error);
    res.status(500).send('Error uploading files');
  }
};

const uploadToAzure = async (file) => {
  const extension = path.extname(file.originalname);
  const blobName = `${uuidv4()}${extension}`;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  await blockBlobClient.uploadData(file.buffer);
  return blockBlobClient.url;
};

module.exports = {
  upload,
  uploadFilesToAzure
};
