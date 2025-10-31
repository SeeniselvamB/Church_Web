import React, { useState, useEffect } from 'react';
import '../styles/Images.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img0 from '../images/Church.png';
import img1 from '../images/img1.jpg';
import img2 from '../images/Church2.jpg';
import img3 from '../images/Church12.jpg';
import img4 from '../images/Church13.jpg';
import img5 from '../images/Church14.jpg';
import img6 from '../images/Church18.jpg';
import img7 from '../images/Church6.jpg';

const images = [img0, img1, img2, img3, img4, img5, img6, img7];

function Images() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 200);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="images-section" id="gallery">
      <div className="images-overlay"></div>

      <div className="image-container" data-aos="zoom-in">
        <h2 className="gallery-title" data-aos="fade-down">
          Church Gallery
        </h2>

        <div className="image-preview" data-aos="fade-up" data-aos-delay="200">
          <img
            src={images[currentIndex]}
            alt={`Church ${currentIndex + 1}`}
            className={fade ? 'fade-in' : 'fade-out'}
          />
        </div>

        <div className="more-link" data-aos="fade-left" data-aos-delay="400">
          <Link to="/gallery">More Images...</Link>
        </div>
      </div>
    </section>
  );
}

export default Images;

