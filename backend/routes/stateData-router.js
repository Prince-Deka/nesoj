const express = require('express');
const stateData = require('../controllers/stateData-controller');
const verifyUser = require('../middlewares/auth-middleware');
const router = express.Router();


router.get('/stateData', verifyUser, stateData);

module.exports = router;
