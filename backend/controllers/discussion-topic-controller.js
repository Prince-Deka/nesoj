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
      if (!topic) {
          return res.status(404).json({ error: "Topic not found" });
      }
      topic.views += 1; // Increment view count
      await topic.save();
      res.status(200).json(topic);
  } catch (error) {
      console.error("Error fetching topic with replies:", error.message);
      res.status(404).json({ error: error.message });
  }
};



// New method to get all topics
const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find().populate('replies');
    res.status(200).json(topics);
  } catch (error) {
    console.error("Error fetching all topics:", error.message); // Debugging log
    res.status(400).json({ error: error.message });
  }
};

const upvoteTopic = async (req, res) => {
  try {
      const topic = await Topic.findById(req.params.id);
      if (!topic) {
          return res.status(404).json({ error: "Topic not found" });
      }

      const userId = req.user._id; // Ensure user ID is attached by authMiddleware

      if (topic.upvotedBy.includes(userId)) {
          return res.status(400).json({ error: "User has already upvoted this topic" });
      }

      topic.upvotesCount += 1;
      topic.upvotedBy.push(userId);
      await topic.save();
      res.status(200).json(topic);
  } catch (error) {
      console.error("Error upvoting topic:", error.message);
      res.status(400).json({ error: error.message });
  }
};

module.exports = { createTopic, getTopicWithReplies, getAllTopics, upvoteTopic };
