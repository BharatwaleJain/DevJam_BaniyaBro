import React, { useState } from 'react';
import "./imagein.css"
import axios from 'axios'


const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState();

  // Handle file input change (either upload or capture)
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file
    const formdata = new FormData()
    formdata.append('file',file)
    axios.post('http://localhost:8000/upload',formdata).then(res => console.log(res)).catch(err => console.log(err))
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the image URL as base64 string
      };
      reader.readAsDataURL(file); // Convert image file to base64
    }
  };

  return (
    <div className='imagecomp'>
      <h2>Upload or Capture an Image</h2>
      
      {/* File input with capture feature for camera */}
      <input
        type="file"
        accept="image/*" // Accept all image types
        capture="environment" // Use "user" for front camera, "environment" for back camera
        onChange={handleImageChange}
      />
      
      {/* Conditionally render the image preview */}
      {selectedImage && (
        <div>
          <h3>Preview:</h3>
          <img src={selectedImage} alt="Uploaded" style={{ width: '300px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
