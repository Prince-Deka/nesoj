const mongoose = require('mongoose');

// It's best to use environment variables for sensitive information
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nesoj';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,  // if you use indexes in your schemas, this is recommended
  useFindAndModify: false // if you use findOneAndUpdate or findOneAndRemove
}).catch(error => console.error('MongoDB connection error:', error)); // Catch and log any initial connection errors

const db = mongoose.connection;

db.on('error', error => console.error('MongoDB connection error:', error)); // Improved error handling
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = db; // Exporting db is usually more useful for checking the connection status elsewhere