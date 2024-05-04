const express = require('express');
const router = express.Router();
const RegisterModel = require('../models/userSchema');
const bcrypt = require('bcrypt');         // For Password Hashing

router.post('/register', async (req, res) => {
    try {
      const { 
        profilePic,
        firstName, 
        middleName, 
        lastName, 
        email,
        gender, 
        phone,
        residence, 
        date, 
        idType, 
        idNumber, 
        address, 
        cityTown, 
        landmark, 
        stateName, 
        district, 
        pincode, 
        motherName, 
        fatherName, 
        noSiblings, 
        uniName, 
        regNo, 
        course, 
        specialization, 
        gradYear, 
        username, 
        password, 
      } = req.body;
      
      // Save the user to the database

      //  Check for Existing User
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
        district, 
        pincode, 
        motherName, 
        fatherName, 
        noSiblings, 
        uniName, 
        regNo, 
        course, 
        specialization, 
        gradYear, 
        username, 
        password: hashedPassword, 
      });


      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
