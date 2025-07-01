import React from 'react';
import './Images.css';
import { Link } from 'react-router-dom';

import img1 from './images/img1.jpg';
import img2 from './images/Church2.jpg';

function Images() {
  return (
    <section className="images-section" id="gallery">
    <div className="image-container">
      <h2 className="gallery-title">Church Gallery</h2>
      <div className="image-preview">
        <img src={img2} alt="Church 1" />
        <img src={img1} alt="Church 2" />
      </div>
      <div className="more-link">
        <Link to="/gallery">More Images...</Link>
      </div>
      </div>
    </section>
  );
}

export default Images;
