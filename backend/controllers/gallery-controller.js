const Photos = require('../models/photo-model');
const Videos = require('../models/video-model');

const photos = async (req, res) => {
    try {
        const response = await Photos.find();
        if(!response || response.length === 0){
            res.status(404).json({message: 'No Photos found'});
            return;
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(`Error displaying photos: ${error}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

const videos = async (req, res) => {
    try {
        const response = await Videos.find();
        if(!response || response.length === 0){
            res.status(404).json({message: 'No Videos found'});
            return;
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(`Error displaying videos: ${error}`);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

module.exports = {
    photos,
    videos
};
