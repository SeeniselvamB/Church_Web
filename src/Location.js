import React from 'react';
import './Location.css';

function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-container">
        <h2>Our Location</h2>
        <p>CSI Immanuel Church, Chithumoondradaippu, Kariapatti, Virudhunagar – 626106</p>
        <iframe
          title="CSI Immanuel Church Location"
          src="https://www.google.com/maps?q=Chithumoondradaippu,+Kariapatti,+Virudhunagar,+626106&output=embed"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
