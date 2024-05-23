// controllers/stateData-controller.js
const User = require("../models/userSchema");
const StateData = require("../models/stateData-model");

const getStateData = async (req, res) => {
    try {
        // Fetch the user data using the user ID attached by the middleware
        const user = await User.findById(req.userID).select({ stateName: 1 });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Use the user's stateName to fetch the corresponding state data
        const stateData = await StateData.findOne({ stateName: user.stateName });
        if (!stateData) {
            return res.status(404).json({ message: "State data not found" });
        }

        res.status(200).json(stateData); // Send state data as response
    } catch (error) {
        console.error("Error fetching state data:", error);
        res.status(500).json({ message: "Error fetching state data", error: error.message });
    }
};

module.exports = getStateData;
