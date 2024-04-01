require('dotenv').config('.env');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI; //fetching the MONGOGB_URI from .env

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log(MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = mongoose;
