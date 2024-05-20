const multer = require('multer');
const { BlobServiceClient } = require('@azure/storage-blob');
require('dotenv').config();

const {
  AZURE_STORAGE_ACCOUNT_NAME,
  AZURE_STORAGE_ACCOUNT_KEY,
  AZURE_STORAGE_CONTAINER_USER,
} = process.env;

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/jpg", "application/pdf"];
        if (!allowedTypes.includes(file.mimetype)) {
            const error = new Error("Invalid file type. Only JPG, JPEG, and PDF are allowed.");
            error.status = 400;
            return cb(error);
        }
        cb(null, true);
    }
});

const blobServiceClient = BlobServiceClient.fromConnectionString(
  `DefaultEndpointsProtocol=https;AccountName=${AZURE_STORAGE_ACCOUNT_NAME};AccountKey=${AZURE_STORAGE_ACCOUNT_KEY};EndpointSuffix=core.windows.net`
);
const containerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_USER);

const uploadToBlob = async (buffer, blobName, mimetype) => {
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  await blockBlobClient.uploadData(buffer, {
    blobHTTPHeaders: { blobContentType: mimetype },
  });
  return blockBlobClient.url;
};

const uploadToAzure = async (req, res, next) => {
  if (!req.files) {
    return next(); // No files part of the request, continue
  }

  try {
    // Process profilePic
    if (req.files.profilePic) {
      const profilePic = req.files.profilePic[0];
      const profilePicBlobName = `user-data/${req.body.username}-PP.${profilePic.originalname.split('.').pop()}`;
      const profilePicUrl = await uploadToBlob(profilePic.buffer, profilePicBlobName, profilePic.mimetype);
      req.body.profilePicUrl = profilePicUrl;
      console.log('Profile Pic URL:', profilePicUrl);
    }

    // Process idFile
    if (req.files.idFile) {
      const idFile = req.files.idFile[0];
      const idFileBlobName = `user-data/${req.body.username}-ID.${idFile.originalname.split('.').pop()}`;
      const idFileUrl = await uploadToBlob(idFile.buffer, idFileBlobName, idFile.mimetype);
      req.body.idFileUrl = idFileUrl;
      console.log('ID File URL:', idFileUrl);
    }

    next();
  } catch (error) {
    console.error('Error uploading to Azure Blob Storage:', error);
    res.status(500).json({ message: 'Failed to upload files to Azure Blob Storage', error });
  }
};

module.exports = { upload, uploadToAzure };
