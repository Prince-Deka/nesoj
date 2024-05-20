const express = require('express');
const router = express.Router();
const newsCont = require('../controllers/news-controller');


router.route('/news').get(newsCont);

module.exports = router;