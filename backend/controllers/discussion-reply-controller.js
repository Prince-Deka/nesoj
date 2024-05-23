const Reply = require('../models/discussion-reply-model');
const Topic = require('../models/discussion-topic-model');

const createReply = async (req, res) => {
  try {
    const reply = new Reply(req.body);
    await reply.save();
    // Update the topic's replies and lastUpdated
    await Topic.findByIdAndUpdate(
      req.body.topicId,
      { $push: { replies: reply._id }, $inc: { repliesCount: 1 }, lastUpdated: Date.now() },
      { new: true }
    );

    res.status(201).json(reply);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createReply };