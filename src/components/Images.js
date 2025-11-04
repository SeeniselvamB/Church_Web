import React, { useEffect } from 'react';
import '../styles/Images.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img0 from '../images/Church.png';
import img1 from '../images/img1.jpg';
import img2 from '../images/Church2.jpg';
import img16 from '../images/Church16.jpg';
import img6 from '../images/Church18.jpg';
import img7 from '../images/Church6.jpg';

const images = [img0, img1, img2,img16,img6, img7];

function Images() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="images-section" id="gallery">
      <div className="images-overlay"></div>

      <div className="image-container" data-aos="fade-up">
        <h2 className="gallery-title" data-aos="fade-down">
          Church Gallery
        </h2>

        {/* === IMAGE GRID === */}
        <div className="image-grid">
          {images.map((img, index) => (
            <div
              className="image-item"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={img} alt={`Church ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="more-link" data-aos="fade-left" data-aos-delay="400">
          <Link to="/gallery">More Images...</Link>
        </div>
      </div>
    </section>
  );
}

export default Images;
