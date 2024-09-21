const mongoose = require('mongoose');
const { type } = require('os');

const productsSchema = new mongoose.Schema({
    title : String,
    prodURL : String,
    price : String,
    imgUrl : String,
})

const UserSchema = new mongoose.Schema({
    mail : String,
    productId : [String]
})

const Product = mongoose.model('Product',productsSchema);
const User = mongoose.model('User',UserSchema);
module.exports = {
    Product : Product ,
    User : User
}