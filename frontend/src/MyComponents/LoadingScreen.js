import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./global.css";
import axios from 'axios';
import image from "./Assets/Loader.png";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!validateEmail(emailValue)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = () => {
    navigate('/upload');
  };

  return (
    <div className="loading-screen">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="instructions">
          <img src={image} alt="Instructions" className="instruction-image" />

      {/* Input for Email */}
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={handleEmailChange}
        className="txt-input"
      />
      {error && <p className="error-message">{error}</p>}
      <br />
      <button onClick={handleNavigate} disabled={!email}>Get Started</button>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;