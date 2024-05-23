const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  views: { type: Number, default: 0 },
  datePosted: { type: Date, default: Date.now },
  repliesCount: { type: Number, default: 0 },
  upvotesCount: { type: Number, default: 0 },
  imageUrl: { type: String },
  replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }]
});

module.exports = mongoose.model('Topic', topicSchema);