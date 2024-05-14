const News = require('../models/news-model');

const news = async (req, res) => {
    try {
        const response = await News.find();
        if(!response){
            res.status(404).json({message: 'No news found'});
            return;
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(`Error displaying news: ${error}`);
    }
};

module.exports = news;