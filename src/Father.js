// src/Fathers.js
import React from 'react';
import './Fathers.css';
import { Link } from 'react-router-dom';
import currentFather from './images/Church2.jpg'; // 📸 Replace with your real image

function Fathers() {
  return (
    <section className="fathers-section" id="fathers">
      <div className="fathers-container">
        <h2>Our Pastor</h2>
        <div className="father-card current-father">
          <img src={currentFather} alt="Rev. John David" className="father-card-img" />
          <div>
            <strong>Rev. John David</strong><br />
            <span>2021 – Present</span>
          </div>
        </div>
        <Link to="/fathers/history" className="read-more-link">Read More...</Link>
      </div>
    </section>
  );
}

export default Fathers;
