import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./global.css";
import axios from 'axios';

const Price = () => {
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleNotify = () => {
    console.log(price);
  };

  return (
    <div className='inputinfo'>
      {/* Input for price */}
      <input
        type="number"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="txt-input"
        id="target-price"
      />
      <button onClick={handleNotify} disabled={!price}>
        <i className="fas fa-bell"></i>
      </button>
    </div>
  );
}

export default Price;