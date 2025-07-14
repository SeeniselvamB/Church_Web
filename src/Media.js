import React, { useEffect } from 'react';
import img1 from './images/instagram.jpg';
import img2 from './images/youtube.png';
import './Media.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Media() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="media-section" id="media" >
      <div className="media-container">
        <h2 data-aos="fade-down">Follow Us</h2>
        <div className="media-links">
          <a
            href="https://www.instagram.com/csi_immanuel_church_cmu/?hl=en"
            className="media-link"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in" data-aos-delay="100"
          >
            <img src={img1} alt="Instagram" />
            Instagram
          </a>
          <a
            href="https://youtube.com/@csiimmanuelchurchcmu?si=_GtFADRm2pBZYEVD"
            className="media-link"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in" data-aos-delay="200"
          >
            <img src={img2} alt="YouTube" />
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

export default Media;
