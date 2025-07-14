import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container" data-aos="fade-up">
        <h2 data-aos="fade-down" data-aos-delay="100">About the Church</h2>
        <p data-aos="fade-up" data-aos-delay="300">
          Church history is not just a collection of events that have taken place in the past. 
          The early Christian believers who played roles in those past events are the Christian commitment, 
          accomplishments, and sacrifices they made for the expansion of the kingdom of Jesus Christ.
        </p>
        <Link
          to="/history"
          className="read-more-link"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          Read More...
        </Link>
      </div>
    </section>
  );
}

export default About;
