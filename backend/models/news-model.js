// models/newsModel.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    id: {
        type: number,
    },
    headline: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    image_url:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('News', newsSchema);
