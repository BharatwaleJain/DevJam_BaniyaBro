import React from 'react'
import "./head.css"
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';


const Head = () => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('./');
  };

  return (
    <div className='header'>
        <img onClick={handleNavigate} src={logo}/>
    </div>
  )
}

export default Head
