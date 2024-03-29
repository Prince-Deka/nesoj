const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mongoDb = require('./dbconnect.js');
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://asuj:Asuj321@asujcluster.uglyh6t.mongodb.net/nesoj';
const cors = require('cors');
let bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up CORS middleware
app.use(cors());

// Specify allowed origins
const allowedOrigins = [
  'http://localhost:5173', // Add your local frontend origin
  'https://nesoj.netlify.app', 
  'https://nesoj.onrender.com',// Add your Netlify frontend origin
];

// Configure CORS with dynamic origin based on request origin
app.use(cors({
  origin: function (origin, callback) {
    // Check if the request origin is allowed
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Connect to MongoDB
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const register = require('./controllers/registrationController.js');
app.use('/register', register);

app.listen(PORT, () => {
  console.log("The server is running at Port No 3000...")
});
