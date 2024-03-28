const express = require('express');
const router = express.Router();
const RegisterModel = require('../models/userSchema');

router.post('/', async (req, res) => {
    try {
      const { email, firstName, middleName, lastName, password, userName, university, universityID, course, year, aadhar ,gender , residence } = req.body;
      // Create a new user instance
      const newUser = new RegisterModel({ email, firstName, middleName, lastName, password, userName, university, universityID, course, year, aadhar, gender, residence });
      // Save the user to the database
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
