import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
