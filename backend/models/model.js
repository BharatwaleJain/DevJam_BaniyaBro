const mongoose = require('mongoose');
const { type } = require('os');

const productsSchema = new mongoose.Schema({
    title : String,
    prodURL : String,
    price : String,
    imgUrl : String,
})

const Product = mongoose.model('Product',productsSchema);
module.exports = Product;