const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    residence: {
        type: String,
        required: true,
        trim: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    idType: {
        type: String,
        required: true,
        trim: true
    },
    idNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    cityTown: {
        type: String,
        required: true,
        trim: true
    },
    landmark: {
        type: String,
        trim: true
    },
    stateName: {
        type: String,
        required: true,
        trim: true
    },
    district: {
        type: String,
        required: true,
        trim: true
    },
    pincode: {
        type: String,
        required: true,
        trim: true
    },
    motherName: {
        type: String,
        required: true,
        trim: true
    },
    fatherName: {
        type: String,
        required: true,
        trim: true
    },
    noSiblings: {
        type: String,
        required: true
    },
    uniName: {
        type: String,
        required: true,
        trim: true
    },
    regNo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    specialization: {
        type: String,
        required: true,
        trim: true
    },
    gradYear: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isApproved: {
        type: Boolean,
        required: true,
        default: false
    },
    profilePicUrl: {
        type: String,
        required: true,
    },
    idFileUrl:{
        type: String,
        required: true,
    }
});

// Secure the password with the bcryptjs library
userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')){
        next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    }catch(error){
        next(error);
    }
});

// Compare the password
userSchema.methods.comparePassword = async function(password){
    try{
        return bcrypt.compare(password, this.password);
    }catch(error){
        console.error(error);
    }
}



// json web token
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,{expiresIn: "30d"});
    }catch(error){
        console.error(error);
    }
};

// define the model kla
const User = new mongoose.model("User", userSchema);
module.exports = User;