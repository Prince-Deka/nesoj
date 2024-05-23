const {Schema, model} = require('mongoose');

const videosSchema = new Schema({
    id:{type: Number, required: true},
    description:{type: String, required: true},
    date:{type: String},
    vdo_url:{type: String, required: true},
});

const Videos = new model('Videos', videosSchema);

module.exports = Videos;