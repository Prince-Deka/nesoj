const multer = require('multer');
const { BlobServiceClient } = require('@azure/storage-blob');
const { v1: uuidv1 } = require('uuid');
require('dotenv').config();

const {
  AZURE_STORAGE_ACCOUNT_NAME,
  AZURE_STORAGE_ACCOUNT_KEY,
  AZURE_STORAGE_CONTAINER_NAME,
} = process.env;

// Configure multer storage - storing files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadToAzure = async (req, res, next) => {
  if (!req.file) {
    return next(); // No file part of the request, continue
  }

  const blobServiceClient = BlobServiceClient.fromConnectionString(
    `DefaultEndpointsProtocol=https;AccountName=${AZURE_STORAGE_ACCOUNT_NAME};AccountKey=${AZURE_STORAGE_ACCOUNT_KEY};EndpointSuffix=core.windows.net`
  );
  const containerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME);

  try {
    // Ensure the container exists
    await containerClient.createIfNotExists({
      access: 'blob' // Public read access
    });

    const blobName = `images/${uuidv1()}-${req.file.originalname}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    // Upload the file - consider using uploadStream for larger files
    await blockBlobClient.upload(req.file.buffer, req.file.size);
    // Simplify the response to just return the URL of the blob
    req.file.location = blockBlobClient.url;
    next();
  } catch (error) {
    console.error('Error uploading to Azure Blob Storage:', error);
    res.status(500).json({ message: 'Failed to upload image to Azure Blob Storage', error });
  }
};

module.exports = { upload, uploadToAzure };
