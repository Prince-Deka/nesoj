const express = require('express');
const router = express.Router();
const nesojExecutives = require('../controllers/nesojExe-controller');


router.route('/nesojExecutives').get(nesojExecutives);

module.exports = router;