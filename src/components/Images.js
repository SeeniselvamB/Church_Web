import React, { useEffect } from 'react';
import '../styles/Images.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img0 from '../images/Church.png';
import img1 from '../images/image.png';
import img2 from '../images/Church2.jpg';
import img3 from '../images/Church18.jpg';
import img4 from '../images/Church6.jpg';
import img5 from '../images/Church16.jpg';

const images = [img0, img1, img2, img3, img4, img5];

function SectionDivider({ withCross = true }) {
  return (
    <div className="about_divider" aria-hidden="true">
      <span className="about_divider_line" />
      <span className="about_divider_dot" />
      {withCross && <span className="about_divider_cross">✝</span>}
      <span className="about_divider_dot" />
      <span className="about_divider_line" />
    </div>
  );
}

function Images() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="images-section" id="gallery">
      
      <div className="dove-watermark" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 60c10-20 40-25 55-10-5 20-25 30-40 28 20 8 30 25 25 45-20-2-38-15-42-33-2 22-15 38-35 42-4-20 4-40 22-50-18 2-35-8-42-25 18-10 40-8 57 3z" fill="#e8d9b5" opacity="0.35"/>
        </svg>
      </div>
      
      <div className="corner-decor corner-bottom-left" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M0 200 Q60 170 90 110 Q110 70 180 50" stroke="#d4af6a" strokeWidth="2" fill="none" opacity="0.7"/>
          <ellipse cx="20" cy="185" rx="14" ry="7" fill="#d4af6a" opacity="0.6" transform="rotate(-30 20 185)"/>
          <ellipse cx="45" cy="165" rx="14" ry="7" fill="#d4af6a" opacity="0.6" transform="rotate(-45 45 165)"/>
          <ellipse cx="70" cy="140" rx="14" ry="7" fill="#d4af6a" opacity="0.5" transform="rotate(-55 70 140)"/>
        </svg>
      </div>

      <div className="image-container">
        <div className="gallery-header" data-aos="fade-down">
          <h1 className="gallery-title">Our Gallery</h1>
          <SectionDivider />
          <p className="gallery-subtitle">

          </p>
        </div>

        <div className="gallery-grid" data-aos="zoom-in">
          {images.map((img, index) => (
            <div
              className="grid-item"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={img} alt={`Church moment ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="more-link">
          <Link to="/gallery">More Images...</Link>
        </div>
      </div>
      <div className="about_hero_mountains" aria-hidden="true" />
    </section>
  );
}

export default Images;
