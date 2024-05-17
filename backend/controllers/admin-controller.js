const User = require("../models/userSchema");
const Contacts = require("../models/contact-model");
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({},{password: 0, username: 0});
        if(!users || users.length === 0) 
            return res.status(404).json({message: "No users found"});
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contacts.find({},{password: 0, username: 0});
        if(!contacts || contacts.length === 0) 
            return res.status(404).json({message: "No contacts found"});
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

module.exports = {getAllUsers, getAllContacts};