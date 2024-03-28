const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    middleName: String,
    lastName: String,
    userName: String,
    password: String,
    confPassword: String,
    university: String,
    universityID: String,
    course: String,
    year: Number,
    aadhar: Number,
    gender:  String,
    residence: String
  
  
  
  });
  
module.exports = mongoose.model('User', userSchema);
  