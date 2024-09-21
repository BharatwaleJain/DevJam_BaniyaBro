const http = require('http');
const {formidable, errors} = require('formidable');
const fs = require('fs');
const axios = require('axios');
const { getJson } = require("serpapi");
const { json } = require('express');
const User = require('../models/model')

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
         //console.log(JSON.stringify(imgBBResponse.data));

         const imgUrl = JSON.parse(fs.readFileSync('./imgUrlData.json', 'utf-8'));
         console.log(imgUrl.data.url)

         //Running image in Google lens api
         const googleLensResults = await new Promise((resolve, reject) => {
            getJson(
              {
                engine: "google_lens",
                url: imgUrl.data.url,
                api_key: "e46eb16e06b86f316f7c4fcb0059c24f949e1cec889d9dcbdfc087f140452d40",
              },
              (json) => {
                if (json) {
                  resolve(json.visual_matches[0]);
                } else {
                  reject(new Error('No visual matches found in Google Lens.'));
                }
              }
            );
          });
         
        //Writing the lens data
        fs.writeFileSync('lensdata.json', JSON.stringify(googleLensResults));
        console.log("Google Lens visual matches:", googleLensResults);

        //Shopping API
        
        getJson({
            engine: "google_shopping",
            q: googleLensResults.title,
            api_key: "e46eb16e06b86f316f7c4fcb0059c24f949e1cec889d9dcbdfc087f140452d40",
            gl:"in"
        }, (json) => {
            fs.writeFileSync('shop.json', JSON.stringify(json));
            console.log("All shopping results: ",json["shopping_results"]);
        });
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


