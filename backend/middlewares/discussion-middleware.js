const multer = require('multer');
const { BlobServiceClient } = require('@azure/storage-blob');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const AZURE_STORAGE_CONNECTION_STRING = `DefaultEndpointsProtocol=https;AccountName=${process.env.AZURE_STORAGE_ACCOUNT_NAME};AccountKey=${process.env.AZURE_STORAGE_ACCOUNT_KEY};EndpointSuffix=core.windows.net`;
const containerName = process.env.AZURE_STORAGE_CONTAINER_CONTENT;

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

const uploadContentImage = async (req, res, next) => {
  if (!req.file) return next();

  const file = req.file;
  const extension = path.extname(file.originalname);
  const blobName = `${uuidv4()}${extension}`;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    // Ensure the container exists before uploading files
    await ensureContainerExists();

    await blockBlobClient.uploadData(file.buffer);
    req.body.imageUrl = blockBlobClient.url; // Attach the image URL to the request body
    next();
  } catch (error) {
    console.error('Error uploading to Azure:', error);
    res.status(500).send('Error uploading image');
  }
};

module.exports = {
  upload,
  uploadContentImage
};
