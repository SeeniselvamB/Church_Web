import React, { useEffect } from 'react';
import '../styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="background-blur"></div>

      <div className="about-container glass-card" data-aos="fade-up">
        <h2 data-aos="fade-down" data-aos-delay="100">About the Church</h2>
        <p data-aos="fade-up" data-aos-delay="300">
          Our church stands as a beacon of faith and love, guided by the teachings of Jesus Christ. 
          Rooted in a history of devotion and service, we honor the commitment and sacrifices made by early believers 
          who spread the light of Christianity to the world. 
          Together, we continue their mission — growing in faith, compassion, and unity.
        </p>
        <Link
          to="/history"
          className="read-more-link"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          Read More...
        </Link>
      </div>
    </section>
  );
}

export default About;

