const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const StateData = require("../models/stateData-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    const jwtToken = token.replace("Bearer", "").trim();

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });
        if (!userData) {
            return res.status(401).json({ message: "Unauthorized. Invalid token" });
        }

        const stateData = await StateData.find(); // Fetch state data from the database

        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        req.stateData = stateData; // Attach fetched state data to the request object

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized. Invalid token" });
    }
};

module.exports = authMiddleware;
