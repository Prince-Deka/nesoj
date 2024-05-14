const express = require('express');
const router = express.Router();
const news = require('../controllers/news-controller');


router.route('/news').get(news);

module.exports = router;