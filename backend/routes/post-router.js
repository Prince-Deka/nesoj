const express = require('express');
const { createPost, getPosts } = require('../controllers/post-controller');
const { upload, uploadToAzure } = require('../middlewares/upload-middleware');

const router = express.Router();

router.post('/posts', upload.single('image'), uploadToAzure, createPost);
router.get('/posts', getPosts);

module.exports = router;
