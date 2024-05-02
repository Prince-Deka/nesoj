const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    profilePic: String,
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    gender: String,
    phone: Number,
    residence: String,
    date: String,
    idType: String,
    idNumber: String,
    address: String,
    cityTown: String,
    landmark: String,
    stateName: String,
    district: String,
    pincode: Number,
    motherName: String,
    fatherName: String,
    noSiblings: Number,
    uniName: String,
    regNo: Number,
    course: String,
    specialization: String,
    gradYear: Number,
    username: String,
    password: String,
  });
  
module.exports = mongoose.model('User', userSchema);
  