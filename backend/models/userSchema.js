const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    profilePic: { type: String, default: 'defaultPic.jpg' },
    firstName: { type: String, required: true, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    phone: { type: Number, required: true },
    residence: { type: String, required: true },
    date: { type: String, required: true },
    idType: { type: String, enum: ['aadhaar', 'voter-id', 'passport', 'pan', 'driving-license', 'ration'], required: true },
    idNumber: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    cityTown: { type: String, required: true },
    landmark: String,
    stateName: { type: String, required: true },
    district: { type: String, required: true },
    pincode: { type: Number, required: true },
    motherName: { type: String, required: true },
    fatherName: { type: String, required: true },
    noSiblings: Number,
    uniName: { type: String, required: true },
    regNo: { type: Number, required: true, unique: true },
    course: { type: String, enum: ['B.Tech', 'MBA', 'BBA', 'M.Tech'], required: true },
    specialization: { type: String, required: true },
    gradYear: { type: Number, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Middleware to hash password before saving if it's modified or new
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Compile the schema into a Model.
const User = mongoose.model('User', userSchema);

module.exports = User;