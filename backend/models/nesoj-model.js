const { Schema, model } = require('mongoose');

const memberSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    whatsApp: { type: String, required: true },
    email: { type: String, required: true },
    linkedIn: { type: String, required: true },
    facebook: { type: String, required: true },
    instagram: { type: String, required: true },
    twitter: { type: String, required: true }
});

// Specify the collection name explicitly
const Member = model('Member', memberSchema, 'nesojExecutives');

module.exports = Member;
