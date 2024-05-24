const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    topicId: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    datePosted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reply', replySchema);
