import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/GalleryPage.css';

import img1 from '../images/Church.png';
import im from '../images/image.png';
import img from '../images/limg.png';
import img2 from '../images/Church12.jpg';
import img3 from '../images/Church11.jpg';
import img4 from '../images/Church9.jpg';
import img5 from '../images/Church2.jpg';
import img6 from '../images/Church5.jpg';
import img7 from '../images/Church13.jpg';
import img8 from '../images/Church14.jpg';
import img9 from '../images/Church15.jpg';
import img10 from '../images/Church16.jpg';
import img11 from '../images/Church18.jpg';
import img12 from '../images/Church6.jpg';
import img13 from '../images/img1.jpg';

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const images = [
    img1,im,img, img2, img3, img4,
    img5, img6, img7, img8, img9, img10, img11, img12,img13
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // 🔒 Scroll lock for all devices (desktop + phone)
  useEffect(() => {
    if (selectedImage) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
      // Restore scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [selectedImage]);

  return (
    <section className="gallery-page" id="gallery">
      <div className="gallery-overlay"></div>

      <div className="glass-card" data-aos="fade-up">
        <h2 data-aos="fade-down">Church Gallery</h2>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Church ${index + 1}`}
              onClick={() => setSelectedImage(src)}
              data-aos="zoom-in"
              data-aos-delay={index * 60}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full view" />
            <span
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

export default GalleryPage;
