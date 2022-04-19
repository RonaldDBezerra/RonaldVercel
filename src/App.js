import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './mobilePort.css';
import './test.css';
import Home from './pages/Home/Home'




function App() {
  return (
    <div className='pt-0'>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
