import React, { useState } from 'react';
import "./global.css";
import axios from 'axios';
import { FaBell } from 'react-icons/fa';

const Price = () => {
  const [price, setPrice] = useState('');

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
        <FaBell /> {}
      </button>
    </div>
  );
}

export default Price;