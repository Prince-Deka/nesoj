const multer = require('multer');
const { BlobServiceClient, generateBlobSASQueryParameters, BlobSASPermissions, StorageSharedKeyCredential } = require('@azure/storage-blob');
const { v1: uuidv1 } = require('uuid');
const dayjs = require('dayjs');
require('dotenv').config();

const {
  AZURE_STORAGE_ACCOUNT_NAME,
  AZURE_STORAGE_ACCOUNT_KEY,
  AZURE_STORAGE_CONTAINER_NAME,
} = process.env;

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadToAzure = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const blobServiceClient = BlobServiceClient.fromConnectionString(
    `DefaultEndpointsProtocol=https;AccountName=${AZURE_STORAGE_ACCOUNT_NAME};AccountKey=${AZURE_STORAGE_ACCOUNT_KEY};EndpointSuffix=core.windows.net`
  );
  const containerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME);

  try {
    // Create the container if it doesn't exist
    await containerClient.createIfNotExists();

    const blobName = `images/${uuidv1()}-${req.file.originalname}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.upload(req.file.buffer, req.file.size);

    // Generate a SAS token for the uploaded blob
    const sharedKeyCredential = new StorageSharedKeyCredential(AZURE_STORAGE_ACCOUNT_NAME, AZURE_STORAGE_ACCOUNT_KEY);
    const sasToken = generateBlobSASQueryParameters({
      containerName: AZURE_STORAGE_CONTAINER_NAME,
      blobName: blobName,
      permissions: BlobSASPermissions.parse("r"), // Read permission
      expiresOn: dayjs().add(1, 'day').toDate(), // Token expiry time
    }, sharedKeyCredential).toString();

    req.file.location = `${blockBlobClient.url}?${sasToken}`;
    next();
  } catch (error) {
    console.error('Error uploading to Azure Blob Storage:', error);
    res.status(500).json({ message: 'Failed to upload image to Azure Blob Storage', error });
  }
};

module.exports = { upload, uploadToAzure };
