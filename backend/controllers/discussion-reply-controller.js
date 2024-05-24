const Reply = require('../models/discussion-reply-model');
const Topic = require('../models/discussion-topic-model');
const User = require('../models/userSchema'); // Make sure to require the User model

const createReply = async (req, res) => {
    try {
        const { content, topicId } = req.body;
        const authorId = req.user._id; // Get the user ID from the request

        // Fetch the user's full name
        const user = await User.findById(authorId);
        const authorName = `${user.firstName} ${user.middleName ? user.middleName + ' ' : ''}${user.lastName}`;

        // Create a new reply
        const reply = new Reply({ content, author: authorId, topicId });
        await reply.save();

        // Update the topic with the new reply and increment reply count
        const topic = await Topic.findById(topicId).populate({
            path: 'replies',
            populate: {
                path: 'author',
                select: 'firstName middleName lastName'
            }
        });
        topic.replies.push(reply._id);
        topic.repliesCount = topic.replies.length; // Update reply count
        await topic.save();

        // Respond with the updated topic
        res.status(201).json(topic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createReply };
