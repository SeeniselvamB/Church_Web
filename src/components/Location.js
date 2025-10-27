import React, { useEffect } from 'react';
import '../styles/Location.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Location() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="location-section" id="location">
      <div className="location-overlay"></div>

      <div className="location-container" data-aos="fade-up">
        <h2 className="location-title" data-aos="fade-down">
          Our Location
        </h2>
        <p className="location-address" data-aos="fade-right">
          CSI Immanuel Church, Chithumoondradaippu, Kariapatti, Virudhunagar – 626106
        </p>

        <div className="map-wrapper" data-aos="zoom-in" data-aos-delay="200">
          <iframe
            title="CSI Immanuel Church Location"
            src="https://www.google.com/maps?q=Chithumoondradaippu,+Kariapatti,+Virudhunagar,+626106&output=embed"
            width="100%"
            height="350"
            frameBorder="0"
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
