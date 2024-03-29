const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mongoDb = require('./dbconnect.js');
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://asuj:Asuj321@asujcluster.uglyh6t.mongodb.net/nesoj';
const cors = require('cors');
let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

app.use(cors({
  origin: 'https://nesoj.netlify.app' // Replace with your frontend origin http://localhost:5173
}));

// Connect to MongoDB
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


const register = require('./controllers/registrationController.js');
app.use('/register',register);

app.listen(PORT,()=>{
    console.log("The server is running at Port No 3000...")
})
