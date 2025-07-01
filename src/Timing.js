import React from 'react';
import './Timing.css';

function Timing() {
  return (
    <section className="timing-section" id="timing" >
      <div className="timing-container">
        <h2>Service Timings</h2>

        <div className="timing-group">
          <h3>Holy Communion Worship</h3>
          <ul>
            <li>First day of the month at 5:00 AM</li>
            <li>First Sunday Worship at 9:30 AM</li>
          </ul>
        </div>

        <div className="timing-group">
          <h3>Sunday Worship</h3>
          <ul>
            <li>Every Sunday at 9:30 AM</li>
            <li>4th Sunday – Song Service</li>
            <li>5th Sunday – Special Worship</li>
          </ul>
        </div>

        <div className="timing-group">
          <h3>Children's Ministry</h3>
          <ul>
            <li>Daily at 7:00 PM</li>
          </ul>
        </div>

        <div className="timing-group">
          <h3>Sunday School</h3>
          <ul>
            <li>Every Sunday at 8:30 AM</li>
          </ul>
        </div>

        <div className="timing-group">
          <h3>Men’s Fellowship</h3>
          <ul>
            <li>Sunday at 12:00 PM</li>
          </ul>
        </div>

        <div className="timing-group">
          <h3>Women’s Fellowship</h3>
          <ul>
            <li>Wednesday at 7:30 PM</li>
          </ul>
        </div>

        <div className="timing-group">
          <h3>Litanies Prayer</h3>
          <ul>
            <li>Friday at 7:30 PM</li>
          </ul>
        </div>

        <div className="timing-group">
          <h3>Fasting Prayer Meeting</h3>
          <ul>
            <li>2nd Saturday at 10:00 AM</li>
          </ul>
        </div>

        <div className="timing-group">
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
