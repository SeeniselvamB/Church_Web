import React, { useState, useEffect } from "react";
import "../styles/Location.css";

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
      {/* Floating animated background */}
      <div className="location-overlay">
        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>
      </div>

      <div className="location-container">
        <h2 className="location-title">Visit Us</h2>
        <SectionDivider/>
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

        {/* Directions button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="directions-btn"
        >
          Get Directions in Google Maps
        </a>
      </div>
      <div className="about_hero_mountains" aria-hidden="true" />
    </section>
  );
}

export default Location;
