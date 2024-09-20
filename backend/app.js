const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path')
const User = require('./models/model');

app = express();

app.use(express.json())
app.use(cors())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');  
    }, 
    filename : (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage
})

app.post('/upload',upload.single('file'), (req,res) => {
    console.log(req.file);
});




module.exports = app;

