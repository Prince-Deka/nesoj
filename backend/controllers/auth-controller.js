const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { upload, uploadToAzure } = require("../middlewares/user-middleware");

const home = async (req, res) => {
    try {
        res.status(200).json({ message: "Home page on controllers/auth-controller.js" });
    } catch (error) {
        console.error("An error occurred in the home function:", error);
        res.status(500).json({ message: "An error occurred" });
    }
};

const register = [
    upload.fields([{ name: 'profilePic', maxCount: 1 }, { name: 'idFile', maxCount: 1 }]),
    async (req, res, next) => {
        try {
            const {
                firstName, middleName, lastName, email, gender, phone, residence, dateOfBirth, idType, idNumber, address, cityTown, landmark, stateName, district, pincode, motherName, fatherName, noSiblings, uniName, regNo, course, specialization, gradYear,
                username, password
            } = req.body;

            console.log("Request Body:", req.body); // Log the entire request body for debugging
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
                username, password: password, profilePicUrl: req.body.profilePicUrl, idFileUrl: req.body.idFileUrl
            });
            res.status(201).json({ msg: "Registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() });
        } catch (error) {
            console.error("Error in register function:", error); // Log the error details
            next(error);
        }
    }
];

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const UserExist = await User.findOne({ username });
        if (!UserExist) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, UserExist.password);
        if (isPasswordValid) {
            const token = jwt.sign({ userId: UserExist._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.status(200).json({ msg: "Login successful", token, userId: UserExist._id.toString() });
        } else {
            return res.status(401).json({ message: "Invalid credentials. Please check your username and password." });
        }
    } catch (error) {
        next(error);
    }
};

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData)
        res.status(200).json({ userData });
    } catch (error) {
        console.log(`Error from the User route ${error}`);
        res.status(500).json({ message: "An error occurred" });
    }
};

module.exports = { home, register, login, user };
