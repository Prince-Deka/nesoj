const Topic = require('../models/discussion-topic-model');
const Reply = require('../models/discussion-reply-model');

const createTopic = async (req, res) => {
  try {
    const { title, author, category, tag, description, isAnonymous, imageUrl } = req.body;
    
    const topic = new Topic({
      title,
      author,
      isAnonymous,
      category,
      tag,
      description,
      isAnonymous,
      imageUrl
    });

    await topic.save();
    res.status(201).json(topic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTopicWithReplies = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id).populate('replies');
    res.status(200).json(topic);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createTopic, getTopicWithReplies };
