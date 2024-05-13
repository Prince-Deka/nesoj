const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({message: "No token provided"});
    }
    
    // Assuming token is in the format "Bearer <jwtToken>, Remove the Bearer"
    const jwtToken = token.replace("Bearer", "").trim();
    

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        // isVerified will contain the decoded payload from userSchema.js
        const userData = await User.findOne({email:isVerified.email}).select({password: 0});
        console.log(userData);
        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized. Invalid token"});
    }

};

module.exports = authMiddleware;