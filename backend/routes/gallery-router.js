const express = require('express');
const router = express.Router();
const {photos, videos} = require('../controllers/gallery-controller');


router.route('/photos').get(photos);
router.route('/videos').get(videos);

module.exports = router;