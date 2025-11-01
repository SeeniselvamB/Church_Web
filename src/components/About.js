import React, { useEffect } from 'react';
import '../styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="background-blur"></div>

      <div className="about-container glass-card" data-aos="fade-up">
        <h2 data-aos="fade-down" data-aos-delay="100">About the Church</h2>
        <p data-aos="fade-up" data-aos-delay="300">
          The CSI IMMANUEL Church Chithumoondradaippu traces its origins to the American Ceylon Mission, which began evangelistic work in Tamil Nadu in 1834 under Rev. Levi Spaulding. In 1846, Rev. James Herrick continued this mission in the Thirumangalam region, extending its reach to Mallanginar and Chithumoondradaippu. In 1857, Rev. Herrick, along with Rev. A. Perumal, initiated Christian ministry in Chithumoondradaippu, leading to the establishment of a new church in 1859. From its modest beginnings, the church has grown into a strong and faithful community, built on enduring values of faith, service, and unity.
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

