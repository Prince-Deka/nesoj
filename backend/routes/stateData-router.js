const express = require('express');
const getStateData = require('../controllers/stateData-controller');
const authMiddleware = require("../middlewares/auth-middleware.js");
const router = express.Router();


router.get('/stateDetails', authMiddleware, getStateData);

module.exports = router;
