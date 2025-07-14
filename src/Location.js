import React, { useEffect } from 'react';
import './Location.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Location() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="location-section" id="location">
      <div className="location-container">
        <h2 data-aos="fade-down">Our Location</h2>
        <p data-aos="fade-right">
          CSI Immanuel Church, Chithumoondradaippu, Kariapatti, Virudhunagar – 626106
        </p>
        <iframe
          title="CSI Immanuel Church Location"
          src="https://www.google.com/maps?q=Chithumoondradaippu,+Kariapatti,+Virudhunagar,+626106&output=embed"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
