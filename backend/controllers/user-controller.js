// controllers/userController.js
const User = require("../models/userSchema");

const getUserData = async (req, res) => {
    try {
        const userData = await User.findById(req.userID).select({ password: 0 });
        if (!userData) {
            return res.status(404).json({ message: "User not found"});
        }
        res.status(200).json(userData); // Send user data as response
    } catch (error) {
        res.status(500).json({ message: "Error fetching user data", error: error.message });
    }
};

module.exports = { getUserData };
