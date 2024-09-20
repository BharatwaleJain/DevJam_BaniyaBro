const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true,"User name required"],
        trim : true
    },
    img : {
        data : Buffer,
        contentType : String
    }
})


const User = mongoose.model('User',userSchema);

module.exports = User;