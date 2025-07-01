import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-section" id="home" >
      <div className="verse-banner" >
        <p>"The Lord is my shepherd; I shall not want." – Psalm 23:1</p>
      </div>
      <div className="home-overlay" >
        <div className="home-text">
          <h1 className="home-title">CSI IMMANUEL CHURCH</h1>
          <h2 className="home-subtitle">CHITHUMOONDRADAIPPU</h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
