const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://asuj:Asuj321@asujcluster.uglyh6t.mongodb.net/nesoj';
// const MONGODB_URI = 'mongodb://127.0.0.1:27017/nesoj';




// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = mongoose;