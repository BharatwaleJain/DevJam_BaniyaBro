import React, { useState } from 'react';
import "./global.css";
import { FaBell } from 'react-icons/fa';

const Price = () => {
  const [price, setPrice] = useState('');

  const handleNotify = () => {
    console.log(price);
  };

  return (
    <div className='inputinfo' id="price-box">
      {/* Input for Price */}
      <input
        type="text"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="txt-input"
        id="target-price"
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
        }}
      />
      <button onClick={handleNotify} disabled={!price}>
        <FaBell /> {}
      </button>
    </div>
  );
}

export default Price;