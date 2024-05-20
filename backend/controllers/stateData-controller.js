const StateData = require('../models/stateData-model');

const getStateData = async (req, res) => {
    try {
        res.status(200).json({ user: req.user, stateData: req.stateData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getStateData;