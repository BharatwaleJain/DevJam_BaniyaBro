import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./global.css";
import axios from 'axios';

const Price = () => {
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('');
  };

  return (
    <div>
      {/* Input for price */}
      <input
        type="number"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="txt-input"
      />
      <button onClick={handleNavigate} disabled={!price}>Notify</button>
    </div>
  );
}

export default Price;