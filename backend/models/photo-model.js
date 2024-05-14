const {Schema, model} = require('mongoose');

const photosSchema = new Schema({
    id:{type: Number, required: true},
    description:{type: String, required: true},
    date:{type: String},
    photo_url:{type: String, required: true},
});

const Photos = new model('Photos', photosSchema);

module.exports = Photos;