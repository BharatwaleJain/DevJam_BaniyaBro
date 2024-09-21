import React from 'react';
import "./global.css";
import axios from 'axios'; 


const Item = () => {
  axios.get('http://localhost:8000/getData').then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  })
  const link = "https://www.amazon.com";
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='card-link'>
      <div className='card'>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' alt='Product'/>
        <div className='details'>
          <h1>Product Name</h1>
          <div className='price'><h3>Price</h3></div>
        </div>
      </div>
    </a>
  );
};

export default Item;