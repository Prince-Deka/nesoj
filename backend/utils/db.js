const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const connectDB = async (next) => {
    try{
        await mongoose.connect(URI);
        console.log("Connected to the database");
    }catch(error){
        console.error("Error: Connection failed");
        if (next) {
            next(error); // Pass the error to the error middleware if next is provided
        } else {
            process.exit(0); // Exit the process if next is not provided
        }
    }
};

module.exports = connectDB;