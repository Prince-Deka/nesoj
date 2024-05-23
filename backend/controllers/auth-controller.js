const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const home = async (req, res) => {
    try {
        res.status(200).json({ message: "Home page on controllers/auth-controller.js" });
    } catch (error) {
        console.error("An error occurred in the home function:", error);
        res.status(500).json({ message: "An error occurred" });
    }
};

const register = async (req, res, next) => {
    try {
        const { 
            firstName, middleName, lastName, email, gender, phone, residence, dateOfBirth, idType, idNumber, address, cityTown, landmark, stateName, district, pincode, motherName, fatherName, noSiblings, uniName, regNo, course, specialization, gradYear,
            username, password, profilePicUrl, idFileUrl } = req.body;

        const existingUser = await User.findOne({
            $or: [{ email }, { phone }, { username }]
        });
        if (existingUser) {
            let duplicateField = "";
            if (existingUser.email === email) duplicateField = "Email";
            if (existingUser.phone === phone) duplicateField = "Phone";
            if (existingUser.username === username) duplicateField = "Username";
            
            return res.status(400).json({ message: `${duplicateField} is already registered` });
        }

        const userCreated = await User.create({ 
            firstName, middleName, lastName, email, gender, phone, residence, dateOfBirth, idType, idNumber, address, cityTown, landmark, stateName, district, pincode, motherName, fatherName, noSiblings, uniName, regNo, course, specialization, gradYear, 
            username, password, profilePicUrl, idFileUrl 
        });

        console.log(profilePicUrl, idFileUrl);

        res.status(201).json({ msg: "Registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() });
    } catch (error) {
        console.error("Error in register function:", error);
        if (next) {
            next(error);
        } else {
            res.status(500).json({ message: "An error occurred" });
        }
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const UserExist = await User.findOne({ username });
        if (!UserExist) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const user = await UserExist.comparePassword(password);
        if (user) {
            res.status(200).json({
                msg: "Login successful", 
                token: await UserExist.generateToken(),
                userId: UserExist._id.toString()
            });
        } else {
            const error = new Error("Invalid credentials. Please check your username and password.");
            error.status = 401;
            throw error;
        }
    } catch (error) {
        next(error);
    }
};

// const user = async (req, res) => {
//     try {
//         const userData = req.user;
//         console.log(userData);
//         res.status(200).json({ userData });
//     } catch (error) {
//         console.log(`Error from the User route ${error}`);
//     }
// };

module.exports = { home, register, login /*, user*/ };
