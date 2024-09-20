const mongoose = require('mongoose');
const { type } = require('os');

const UserSchema = new mongoose.Schema({
    imgage : String
})

const User = mongoose.model('User',UserSchema);
module.exports = User;