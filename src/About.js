import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
function About() {
  return (
    <section className="about-section" id="about" >
      <div className="about-container">
        <h2>About the Church</h2>
        <p>
          Church history is not just a collection of events that have taken place in the past. 
          The early Christian believers who played roles in those past events are the Christian commitment, 
          accomplishments, and sacrifices they made for the expansion of the kingdom of Jesus Christ.
        </p>
        <Link to="/history" className="read-more-link">Read More...</Link>
      </div>
    </section>
  );
}

export default About;


