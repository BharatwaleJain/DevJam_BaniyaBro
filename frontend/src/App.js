import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Head from './MyComponents/header/head';
import ImageUploader from './MyComponents/imagein/imagein';
import LoadingScreen from './MyComponents/LoadingScreen';
import Comp from './MyComponents/diffitems/diffitems';

function App() {
  return (
    <Router>
      <Head />
      <Comp/>
      <div className='board'>
       
        
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/upload" element={<ImageUploader />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
