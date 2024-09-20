const http = require('http');
const {formidable, errors} = require('formidable');
const fs = require('fs');
const axios = require('axios');
const { getJson } = require("serpapi");

const multer = require('multer');
const path = require('path')

const IMGBB_API_KEY = "8a496163927b9d9e0480e2850c8f8047";

exports.getImage = async (req,res) => {
    const form = formidable({});
     let fields;
     let files;
     try {
         [fields, files] = await form.parse(req);
         
        //  if empty files
        if (Object.keys(files).length === 0) {
            throw new Error('No files were uploaded.');
        }

        const image = files.image[0];
        // Read the file data
        const fileData = fs.readFileSync(image.filepath);

        // Convert file data to a base64 encoded string
        const base64Image = new Buffer.from(fileData).toString('base64');

         // Prepare the payload to imgBB
         const formData = new URLSearchParams();
         formData.append('image', base64Image);
         
          // Send the request to imgBB
          const imgBBResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, formData, {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          });
 
         fs.writeFileSync('./imgUrlData.json',JSON.stringify(imgBBResponse.data));
         console.log(imgBBResponse.data);
         return

     } catch (err) {
         // example to check for a very specific error
         if (err.code === errors.maxFieldsExceeded) {
 
         }
         console.error(err);
         res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
         res.end(String(err));
         return;
     }
}




exports.getLens = async (req,res) => {
    try{
        getJson({
            engine: "google_lens",
            url: "./file_1726852864231.png",
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

