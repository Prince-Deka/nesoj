const News = require('../models/news-model');

const news = async (req, res) => {
    try {
        const response = await News.find({});
        if (!response || response.length === 0) {
            return res.status(404).json({ message: 'No News found' });
        }
        res.status(200).json(response);
    } catch (error) {
        console.error(`Error displaying news: ${error} - Request: ${req.method} ${req.path}`);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = news;