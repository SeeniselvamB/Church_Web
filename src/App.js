import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Timing from './Timing';
// import Events from './Branch';
import Images from './Images';
import Location from './Location';
import GalleryPage from './GalleryPage';
import HistoryPage from './HistoryPage';
import TamilHistory from './TamilHistory';
import Media from './Media';
// import BranchDetail from './BranchDetail';


import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                {/* <section id="father"><Father /></section> */}
                <section id="timing"><Timing /></section>
                <section id="gallery"><Images /></section>
                {/* <section id="events"><Events /></section> */}
                <section id="media"><Media /></section>
                <section id="location"><Location /></section>
              </>
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/history/tamil" element={<TamilHistory />} />
          {/* <Route path="/branch/:id" element={<BranchDetail />} /> */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

