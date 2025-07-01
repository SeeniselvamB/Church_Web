import React from 'react';
import img1 from './images/instagram.jpg';
import img2 from './images/youtube.png';
import './Media.css';

function Media() {
  return (
    <section className="media-section" id="media">
      <div className="media-container">
        <h2>Follow Us</h2>
        <div className="media-links">
          <a
            href="https://www.instagram.com/csi_immanuel_church_cmu/?hl=en"
            className="media-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img1} alt="Instagram" />
            Instagram
          </a>
          <a
            href="https://youtube.com/@csiimmanuelchurchcmu?si=_GtFADRm2pBZYEVD"
            className="media-link"
            target="_blank"
            rel="noopener noreferrer"
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
