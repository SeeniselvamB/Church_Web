import React, { useEffect } from 'react';
import './Timing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Timing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="timing-section" id="timing">
      <div className="timing-container" data-aos="fade-up">
        <h2 data-aos="fade-down">Service Timings</h2>

        <div className="timing-group" data-aos="fade-right" data-aos-delay="100">
          <h3>Holy Communion Worship</h3>
          <ul>
            <li>First day of the month at 5:00 AM</li>
            <li>First Sunday Worship at 9:30 AM</li>
          </ul>
        </div>

        <div className="timing-group" data-aos="fade-left" data-aos-delay="200">
          <h3>Sunday Worship</h3>
          <ul>
            <li>Every Sunday at 9:30 AM</li>
            <li>4th Sunday – Song Service</li>
            <li>5th Sunday – Special Worship</li>
          </ul>
        </div>

        <div className="timing-group" data-aos="fade-right" data-aos-delay="300">
          <h3>Children's Ministry</h3>
          <ul>
            <li>Daily at 7:00 PM</li>
          </ul>
        </div>

        <div className="timing-group" data-aos="fade-left" data-aos-delay="400">
          <h3>Sunday School</h3>
          <ul>
            <li>Every Sunday at 8:30 AM</li>
          </ul>
        </div>

        <div className="timing-group" data-aos="fade-right" data-aos-delay="500">
          <h3>Men’s Fellowship</h3>
          <ul>
            <li>Sunday at 12:00 PM</li>
          </ul>
        </div>

        <div className="timing-group" data-aos="fade-left" data-aos-delay="600">
          <h3>Women’s Fellowship</h3>
          <ul>
            <li>Wednesday at 7:30 PM</li>
          </ul>
        </div>

        <div className="timing-group" data-aos="fade-right" data-aos-delay="700">
          <h3>Litanies Prayer</h3>
          <ul>
            <li>Friday at 7:30 PM</li>
          </ul>
        </div>

        <div className="timing-group" data-aos="fade-left" data-aos-delay="800">
          <h3>Fasting Prayer Meeting</h3>
          <ul>
            <li>2nd Saturday at 10:00 AM</li>
          </ul>
        </div>

        <div className="timing-group" data-aos="fade-up" data-aos-delay="900">
          <h3>Youth Fellowship</h3>
          <ul>
            <li>Sunday at 7:00 PM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Timing;
