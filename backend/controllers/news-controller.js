// controllers/newsController.js
const { uploadImageToAzure } = require('../utils/azureStorage');
const { validationResult } = require('express-validator');
const streamifier = require('streamifier');
const News = require('../models/news-model');

exports.getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching news' });
    }
};

exports.createNews = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, content } = req.body;
        const { file } = req;

        let imageUrl = null;
        if (file) {
            const containerName = 'news';
            const blobName = `${Date.now()}_${file.originalname}`;
            const stream = streamifier.createReadStream(file.buffer);
            const streamLength = file.buffer.length;

            await uploadImageToAzure(containerName, blobName, stream, streamLength);
            imageUrl = `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${containerName}/${blobName}`;
        }

        const newsItem = new News({ title, content, imageUrl });
        await newsItem.save();

        res.status(201).json(newsItem);
    } catch (err) {
        res.status(500).json({ message: 'Error uploading news' });
    }
};
