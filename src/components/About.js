import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "../styles/About.css";
import 'aos/dist/aos.css';
import pasImage from "../limg.png";


/** Small hook: fades/slides an element in once it scrolls into view */
function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("about_is_visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

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

function Hero() {
  const cardRef = useReveal();
  return (
    <div className="about_hero" id="about">
      <div className="about_hero_branch" aria-hidden="true">
        🌿
      </div>
      <div className="about_hero_dove" aria-hidden="true">
        🕊
      </div>

      <div className="about_hero_content">
        <h1 className="about_title" data-aos="fade-right">About Our Church</h1>
        <SectionDivider />
        <p className="about_tagline">A Place of Faith, Hope &amp; Love</p>
        <p className="about_hero_text">
        CSI Immanuel Church, Chithumoondradaippu began its Christian ministry in 1857 through Rev. James Herrick leading to the establishment of the church in 1859. Since then, it has grown into a vibrant faith community, serving God with steadfast faith, unity, and love.        </p>
      </div>

      <div className="about_hero_mountains" aria-hidden="true" />

      <div className="about_pastor_section">
        <div ref={cardRef} className="about_pastor_card about_reveal">

          {/* LEFT SIDE */}
          <div className="about_pastor_left">
            <h2 className="about_section_heading">American Missionary</h2>

            <div className="about_pastor_ring">
              <img
                src={pasImage}
                alt="Pastor"
                className="about_pastor_avatar"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="about_pastor_right">
            <h3 className="about_pastor_name">
              Rev. James Herrick
            </h3>

            <p className="about_hero_text">
              Rev. James Herrick was appointed as the missionary of the Thirumangalam district in 1846. He continued to serve in this capacity for a total of 37 years until 1883.
        He was the first to preach the gospel, especially in the Mallanginar and Chithumoondradaippu areas.
            </p>

            <p className="about_hero_text">
              We are blessed to have him as our spiritual leader and shepherd.
            </p>

            <div className="about_history_btn about_pastor_btn">
              <Link to="/history">Read More...</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default function About() {
  return (
    <div className="about_page">
      <Hero />
    </div>
  );
}