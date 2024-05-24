const express = require('express');
const router = express.Router();
const topicController = require('../controllers/discussion-topic-controller');
const replyController = require('../controllers/discussion-reply-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const { upload, uploadContentImage } = require('../middlewares/discussion-middleware');

router.post('/topics', authMiddleware, upload.single('image'), uploadContentImage, topicController.createTopic);
router.get('/topics/:id', topicController.getTopicWithReplies);
router.post('/replies', authMiddleware, replyController.createReply);

module.exports = router;
