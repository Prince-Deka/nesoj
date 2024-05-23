const mongoose = require('mongoose');

const stateMemberSchema = new mongoose.Schema({
    memberId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    whatsApp: String,
    email: String,
    linkedIn: String,
    facebook: String,
    instagram: String,
    twitter: String,
    imageUrl: String
});

const stateDataSchema = new mongoose.Schema({
    stateId: {
        type: Number,
        required: true
    },
    stateName: {
        type: String,
        required: true
    },
    stateLogo: String,
    motto: String,
    about: String,
    stateMembers: [stateMemberSchema]
}, { timestamps: true });

const StateData = mongoose.model('StateData', stateDataSchema, 'stateData');

module.exports = StateData;
