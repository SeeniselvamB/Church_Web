import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="home-section" id="home">
      <div className="verse-banner" data-aos="fade-down">
        <p>"The Lord is my shepherd; I shall not want." – Psalm 23:1</p>
      </div>
      <div className="home-overlay">
        <div className="home-text">
          <h1
            className="home-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            CSI IMMANUEL CHURCH
          </h1>
          <h2
            className="home-subtitle"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            CHITHUMOONDRADAIPPU
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
