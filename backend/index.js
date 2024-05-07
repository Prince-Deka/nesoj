const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Connection to MongoDB
const mongoDb = require('./dbconnect.js');

// Body parser middleware to handle JSON payloads
app.use(bodyParser.json());

// CORS configuration for a list of allowed origins
const allowedOrigins = [
  'https://nesojtest.netlify.app', // Add any specific domains you need here
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Simple route for health checking or testing the server
app.get('/test', (req, res) => { 
   res.send("Backend register server is working");
});

// Importing and using routes from controllers
const registerController = require('./controllers/registrationController.js');
app.use('/api/register', registerController);

const loginController = require('./controllers/loginCheck.js');
app.use('/api/login', loginController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
