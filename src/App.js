import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Timing from './components/Timing';
import Images from './components/Images';
import Location from './components/Location';
import GalleryPage from './components/GalleryPage';
import HistoryPage from './components/HistoryPage';
import TamilHistory from './components/TamilHistory';
import Media from './components/Media';
import Prayer from './components/Prayer';


import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Prayer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="timing"><Timing /></section>
                <section id="gallery"><Images /></section>
                <section id="media"><Media /></section>
                <section id="location"><Location /></section>
              </>
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/history/tamil" element={<TamilHistory />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;


