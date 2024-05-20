const {Schema, model} = require('mongoose');

const newsSchema = new Schema({
    id:{type: Number, required: true},
    headline:{type: String, required: true},
    content:{type: String},
    img_url:{type: String, required: true},
});

const newsModel = new model('News', newsSchema);

module.exports = newsModel;