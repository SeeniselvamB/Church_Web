import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/GalleryPage.css';

import img1 from '../images/Church.png';
import img2 from '../images/Church2.jpg';
import img5 from '../images/Church5.jpg';
import img6 from '../images/Church6.jpg';
import img7 from '../images/Church7.jpg';
import img8 from '../images/Church7.jpg';
import img9 from '../images/Church9.jpg';
import img10 from '../images/Church10.jpg';
import img11 from '../images/Church11.jpg';
import img12 from '../images/Church12.jpg';
import img13 from '../images/Church13.jpg';
import img14 from '../images/Church14.jpg';
import img15 from '../images/Church15.jpg';
import img16 from '../images/Church16.jpg';
import img17 from '../images/Church17.jpg';
import img18 from '../images/Church18.jpg';

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  const images = [
    img1, img7, img8, img17, img2, img9, img10, img11,
    img12, img5, img13, img14, img15, img16, img18, img6,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-page" id="gallery">
      {/* Background light effect */}
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

      {/* Modal Image View */}
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

