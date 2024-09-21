import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./global.css";
import image from "./Assets/Loader.png";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
          <p>Follow the instructions to upload your image.</p>
          <button onClick={handleNavigate}>Go to Upload</button>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;