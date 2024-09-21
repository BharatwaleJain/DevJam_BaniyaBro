import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './MyComponents/header/head';
import ImageUploader from './MyComponents/imagein/imagein';
import LoadingScreen from './MyComponents/LoadingScreen';
import Item from './MyComponents/items';

function App() {
  return (
    <Router>
      <Head />
      <div className="board">
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/upload" element={<ImageUploader />} />
        </Routes>
        <Item />
        <Item />
        <Item />
      </div>
    </Router>
  );
}

export default App;