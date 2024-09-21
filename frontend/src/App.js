import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './MyComponents/header/head';
import ImageUploader from './MyComponents/imagein/imagein';
import LoadingScreen from './MyComponents/LoadingScreen';
import Item from './MyComponents/items';
import ItemList from './MyComponents/itemList';
import Price from './MyComponents/Price';

function App() {
  return (
    <Router>
      <Head />
        <Routes>
          <Route path="/" element={
            <div className="board">
              <LoadingScreen />
            </div>} />
          <Route path="/upload" element={
            <div className="board">
              <ImageUploader />
            </div>} />
          <Route path="/list" element={
            <div id='contain'>
              <Price />
              <ItemList />
            </div>
          } />
        </Routes>
    </Router>
    );
}

export default App;