const fs = require('fs');
const { getJson } = require("serpapi");
const User = require('../models/model');

exports.home = async (req,res) => {
    try{
       res.status(200).send("HOME PAGE"); 
    }catch(err){
        res.status(404).json({
            status : "Fail",
            message : err
        })
    }
}


exports.getLens = async (req,res) => {
    try{
        getJson({
            engine: "google_lens",
            url: "https://th.bing.com/th/id/OIP.RclgOCmXMr2z57kL5O3onwHaFJ?rs=1&pid=ImgDetMain",
            api_key: "e46eb16e06b86f316f7c4fcb0059c24f949e1cec889d9dcbdfc087f140452d40"
        }, (json) => {
            fs.writeFileSync('lensdata.json',JSON.stringify(json["visual_matches"]));
            console.log(json["visual_matches"]);
        });
       res.status(200).send("GOT DATA") 
    }catch(err){
        res.status(404).json({
            status : "Fail",
            message : err
        })
    }
}