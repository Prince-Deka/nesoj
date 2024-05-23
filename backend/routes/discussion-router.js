const express = require('express');
const router = express.Router();
const topicController = require('../controllers/discussion-topic-controller');
const replyController = require('../controllers/discussion-reply-controller');

router.post('/topics', topicController.createTopic);
router.get('/topics/:id', topicController.getTopicWithReplies);
router.post('/replies', replyController.createReply);

module.exports = router;