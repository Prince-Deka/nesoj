const express = require('express');
const router = express.Router();
const topicController = require('../controllers/discussion-topic-controller');
const replyController = require('../controllers/discussion-reply-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const authMiddlewareWithUserDetails = require('../middlewares/auth-middleware-with-user-details');
const { upload, uploadContentImage } = require('../middlewares/discussion-middleware');

router.post('/topics', authMiddleware, upload.single('image'), uploadContentImage, topicController.createTopic);
router.get('/topics/:id', topicController.getTopicWithReplies);
router.get('/topics', authMiddleware,topicController.getAllTopics); // New route for getting all topics
router.post('/replies', authMiddlewareWithUserDetails, replyController.createReply);
router.post('/topics/:id/view', authMiddlewareWithUserDetails,topicController.incrementViewCount);
router.post('/topics/:id/upvote', authMiddlewareWithUserDetails, topicController.upvoteTopic); // New route for upvoting

module.exports = router;
