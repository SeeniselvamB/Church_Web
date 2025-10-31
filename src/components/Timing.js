import React, { useEffect } from 'react';
import '../styles/Timing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Timing() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="timing-section" id="timing">
      <div className="timing-overlay"></div>

      <div className="timing-container glass-card" data-aos="fade-up">
        <h2 data-aos="fade-down" data-aos-delay="100">Service Timings</h2>

        {/* === TWO COLUMNS === */}
        <div className="timing-columns">
          {/* LEFT COLUMN */}
          <div className="timing-column">
            <div className="timing-group" data-aos="fade-right" data-aos-delay="200">
              <h3>Holy Communion Worship</h3>
              <ul>
                <li>First day of the month — 5:00 AM</li>
                <li>First Sunday Worship — 9:30 AM</li>
              </ul>
            </div>

            <div className="timing-group" data-aos="fade-right" data-aos-delay="400">
              <h3>Sunday Worship</h3>
              <ul>
                <li>Every Sunday — 9:30 AM</li>
                <li>4th Sunday — Song Service</li>
                <li>5th Sunday — Special Worship</li>
              </ul>
            </div>

            <div className="timing-group" data-aos="fade-right" data-aos-delay="600">
              <h3>Men’s Fellowship</h3>
              <ul>
                <li>Sunday — 12:00 PM</li>
              </ul>
            </div>

            <div className="timing-group" data-aos="fade-right" data-aos-delay="800">
              <h3>Litanies Prayer</h3>
              <ul>
                <li>Friday — 7:30 PM</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="timing-column">
            <div className="timing-group" data-aos="fade-left" data-aos-delay="300">
              <h3>Children's Ministry</h3>
              <ul>
                <li>Daily — 7:00 PM</li>
              </ul>
            </div>

            <div className="timing-group" data-aos="fade-left" data-aos-delay="500">
              <h3>Sunday School</h3>
              <ul>
                <li>Every Sunday — 8:30 AM</li>
              </ul>
            </div>

            <div className="timing-group" data-aos="fade-left" data-aos-delay="700">
              <h3>Women’s Fellowship</h3>
              <ul>
                <li>Wednesday — 7:30 PM</li>
              </ul>
            </div>

            <div className="timing-group" data-aos="fade-left" data-aos-delay="900">
              <h3>Fasting Prayer Meeting</h3>
              <ul>
                <li>2nd Saturday — 10:00 AM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* === CENTERED LAST ITEM === */}
        <div className="timing-group center-bottom" data-aos="fade-up" data-aos-delay="1000">
          <h3>Youth Fellowship</h3>
          <ul>
            <li>Sunday — 7:00 PM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Timing;

