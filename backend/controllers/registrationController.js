const express = require('express');
const router = express.Router();
const RegisterModel = require('../models/userSchema');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const {
        profilePic,
        firstName,
        middleName,
        lastName,
        email,
        gender,
        phone,
        date,
        idType,
        idNumber,
        address,
        cityTown,
        landmark,
        stateName,
        country,
        pincode,
        username,
        password,
    } = req.body;

    // Check for Existing User
    const existingUser = await RegisterModel.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(409).json({ message: 'Username or email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new RegisterModel({
        profilePic,
        firstName,
        middleName,
        lastName,
        email,
        gender,
        phone,
        date,
        idType,
        idNumber,
        address,
        cityTown,
        landmark,
        stateName,
        country,
        pincode,
        username,
        password: hashedPassword, // Store the hashed password, not the plain text one
    });

    // Save the new user to the database
    try {
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: savedUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = register;