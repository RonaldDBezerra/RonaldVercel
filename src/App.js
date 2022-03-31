import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './mobilePort.css';
import './test.css';
import Home from './pages/Home/Home'
import HomeTunes from './pages/Tunes/HomeTunes';
import SearchTunes from './pages/Tunes/page/SearchTunes';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tunes" element={<HomeTunes />} />
      <Route path="/tunes/search" element={<SearchTunes /> } />
    </Routes>
    </>
  );
}

export default App;
