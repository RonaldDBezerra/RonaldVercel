import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './mobilePort.css';
import './test.css';
import Home from './pages/Home/Home'
import HomeTunes from './pages/Tunes/HomeTunes';
import SearchTunes from './pages/Tunes/page/SearchTunes';
import Musics from './pages/Tunes/page/Musics';
import Favorites from './pages/Tunes/page/Favorites';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tunes" element={<HomeTunes />} />
      <Route path="/tunes/search" element={<SearchTunes /> } />
      <Route path="/tunes/album/:id" element={<Musics />} />
      <Route path='/tunes/favorites' element={<Favorites />} />
    </Routes>
    </>
  );
}

export default App;
