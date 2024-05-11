const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).json({ message: "Home page on controllers/auth-controller.js" });
    } catch (error) {
        console.error("An error occurred in the home function:", error);
        res.status(500).json({ message: "An error occurred" });
    }
};


const register = async (req, res, next) => { // Add next as a parameter
    try {
        console.log(req.body);
        const { 
            firstName, middleName, lastName, email, gender, phone, residence, dateOfBirth, idType, idNumber, address, cityTown, landmark, stateName, district, pincode, motherName, fatherName, noSiblings, uniName, regNo, course, specialization, gradYear,
             username, password } = req.body;
        const userExist = await User.findOne({ username });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // // HASH THE PASSWORD
        // const saltRound = 10;
        // const salt = await bcrypt.genSalt(saltRound);
        // const hash_password = await bcrypt.hash(password, salt);
        //  Above not required as the excription is done in the userSchema.js file

        const userCreated = await User.create({ firstName, middleName, lastName, email, gender, phone, residence, dateOfBirth, idType, idNumber, address, cityTown, landmark, stateName, district, pincode, motherName, fatherName, noSiblings, uniName, regNo, course, specialization, gradYear, username, password });
        res.status(201).json({ msg: "Registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() });
    } catch (error) {
        console.error("Error in register function:", error); // Log the complete error object 
        if (next) {
            next(error); // Pass the error to the error middleware if next is provided
        } else {
            res.status(500).json({ message: "An error occurred" }); // Send a generic error response if next is not provided
        }
    }
};


const login = async(req,res,next) => {
    try{
        const {username, password} = req.body;
        // console.log(`Attempting to log in with username: '${username}'`); // Debugging statement
        const UserExist = await User.findOne({username});
        if(!UserExist){
            // console.log(`User with username: '${username}' not found`); // Debugging statement
            return res.status(400).json({message: "User does not exist"});
        }

        // const user = await bcrypt.compare(password, UserExist.password);
        const user = await UserExist.comparePassword(password);
        if(user){
            res.status(200).json({
                msg: "Login successful", 
                token: await UserExist.generateToken(),
                userId: UserExist._id.toString()
            });
        }else{
            const error = new Error("Invalid credentials");
            error.status = 401;
            throw error;
        }
    }catch(error){
        // res.status(500).json("An error occurred");
        next(error);
    }
};

module.exports = { home, register , login};