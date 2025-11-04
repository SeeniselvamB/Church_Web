import React, { useState, useEffect } from "react";
import "../styles/Location.css";

function Location() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const address =
    "CSI Immanuel Church, Chithumoondradaippu, Kariapatti, Virudhunagar – 626106";
  const mapUrl =
    "https://www.google.com/maps?q=Chithumoondradaippu,+Kariapatti,+Virudhunagar,+626106&output=embed";
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Chithumoondradaippu,+Kariapatti,+Virudhunagar,+626106";

  const copyAddress = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // ✅ Modern secure method
        await navigator.clipboard.writeText(address);
      } else {
        // ⚙️ Fallback for insecure or older browsers
        const textArea = document.createElement("textarea");
        textArea.value = address;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
      alert("Copy failed. Please copy manually.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="location-section" id="location">
      {/* Floating animated background */}
      <div className="location-overlay">
        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>
      </div>

      <div className="location-container">
        <h2 className="location-title">Visit Us</h2>
        <p className="location-subtext">
          Join us for worship and fellowship. We’d love to welcome you to our
          church family.
        </p>

        {/* Address card */}
        <div className="address-card">
          <h3>Church Address</h3>
          <p>{address}</p>
          <button onClick={copyAddress} className="copy-btn">
            {copiedAddress ? "Copied!" : "Copy Address"}
          </button>
        </div>

        {/* Info cards */}
        <div className="info-grid">
          <div className="info-card">
            <h4>Service Times</h4>
            <p>Sunday: 9:45 AM</p>
            <p>Friday: 7:00 PM</p>
          </div>
          <div className="info-card">
            <h4>Get in Touch</h4>
            <p>Need directions?</p>
            <p>We're here to help!</p>
          </div>
        </div>

        {/* Directions button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="directions-btn"
        >
          Get Directions in Google Maps
        </a>

        {/* Map */}
        <div className="map-container">
          {!isMapLoaded && (
            <div className="map-loading">
              <div className="spinner"></div>
              <p>Loading map...</p>
            </div>
          )}
          <iframe
            title="CSI Immanuel Church Location"
            src={mapUrl}
            width="100%"
            height="500"
            frameBorder="0"
            className="map-frame"
            allowFullScreen=""
            loading="lazy"
            onLoad={() => setIsMapLoaded(true)}
          ></iframe>
        </div>

        {/* Bottom badges */}
        <div className="feature-grid">
          <div className="feature-card">
            <h5>Accessible</h5>
            <p>Wheelchair friendly entrance</p>
          </div>
          <div className="feature-card">
            <h5>Parking</h5>
            <p>Free parking available</p>
          </div>
          <div className="feature-card">
            <h5>Welcoming</h5>
            <p>All are welcome to join us</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
