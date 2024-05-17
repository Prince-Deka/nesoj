// routes/newsRoutes.js
const express = require('express');
const { getAllNews, createNews } = require('../controllers/news-controller');
const newsMiddleware = require('../middlewares/news-middleware');

const router = express.Router();

router.get('/news', getAllNews);
router.post('/news', newsMiddleware, createNews);

module.exports = router;
