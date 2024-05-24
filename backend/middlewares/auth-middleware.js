// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");


const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    const jwtToken = token.replace("Bearer", "").trim();
    

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        req.userID = isVerified.userId; // Attach user ID to request object
        next(); // Proceed to the next middleware/controller
    } catch (error) {
        console.log(`Error verifying token: ${error}`);
        return res.status(401).json({ message: "Unauthorized. Invalid token", error: error.message});
    }
};

module.exports = authMiddleware;
