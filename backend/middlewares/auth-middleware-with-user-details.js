const jwt = require('jsonwebtoken');
const User = require('../models/userSchema'); // Adjust the path to your user model

const authMiddlewareWithUserDetails = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const jwtToken = token.replace('Bearer ', '').trim(); // Ensure correct formatting

    try {
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY); // Verify token using secret key

        // Fetch the user from the database
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = user; // Attach the full user object to the request
        next(); // Proceed to the next middleware/controller
    } catch (error) {
        console.log(`Error verifying token: ${error}`);
        return res.status(401).json({ message: 'Unauthorized. Invalid token', error: error.message });
    }
};

module.exports = authMiddlewareWithUserDetails;
