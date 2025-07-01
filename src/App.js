import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
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
              </>
            }
          />
           </Routes>
      </div>
    </Router>
  );
}

                

export default App;
