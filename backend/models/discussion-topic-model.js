const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  tag: { type: String }, // Assuming tags are a comma-separated string
  description: { type: String, required: true }, // Content of the discussion
  views: { type: Number, default: 0 },
  datePosted: { type: Date, default: Date.now },
  repliesCount: { type: Number, default: 0 },
  upvotesCount: { type: Number, default: 0 },
  imageUrl: { type: String }, // URL to the uploaded image
  isAnonymous: { type: Boolean, default: false }, // Added anonymous functionality
  replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }],
  upvotedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  viewedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }] // Track users who upvoted
});

module.exports = mongoose.model('Topic', topicSchema);
