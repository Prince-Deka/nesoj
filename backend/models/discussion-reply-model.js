const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  topicId: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  datePosted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reply', replySchema);