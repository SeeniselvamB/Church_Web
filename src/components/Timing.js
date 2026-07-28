import React from "react";
import 'aos/dist/aos.css';
import "../styles/Timing.css";

// ---------- Reusable Divider ----------

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

// ---------- Main Component ----------

const Timing = () => {
  const services = [
    {
      title: "Holy Communion Worship",
      timings: [
        "First Day of the Month — 5:00 AM",
        "First Sunday Worship — 9:30 AM",
      ],
    },
    {
      title: "Sunday Worship",
      timings: [
        "Every Sunday — 9:30 AM",
        "4th Sunday — Song Service",
        "5th Sunday — Special Worship",
      ],
    },
    {
      title: "Sunday School",
      timings: [
        "Every Sunday — 8:30 AM",
      ],
    },
    {
      title: "Youth Fellowship",
      timings: [
        "Sunday — 7:00 PM",
      ],
    },
    {
      title: "Men's Fellowship",
      timings: [
        "Sunday — 12:00 PM",
      ],
    },
    {
      title: "Children's Ministry",
      timings: [
        "Daily — 7:00 PM",
      ],
    },
    {
      title: "Women's Fellowship",
      timings: [
        "Wednesday — 7:30 PM",
      ],
    },
    {
      title: "Litanies Prayer",
      timings: [
        "Friday — 7:00 PM",
      ],
    },

    {
      title: "Fasting Prayer Meeting",
      timings: [
        "Saturday — 10:00 aM",
      ],
    },
  ];
  return (
    <main className="service-timing-page">
      <section className="hero-section">
        <div className="corner-decor corner-top-left" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none">
            <path
              d="M0 0 Q60 30 90 90 Q110 130 180 150"
              stroke="#d4af6a"
              strokeWidth="2"
              opacity="0.7"
            />
            <ellipse cx="20" cy="15" rx="14" ry="7" fill="#d4af6a" opacity="0.6" transform="rotate(30 20 15)" />
            <ellipse cx="45" cy="35" rx="14" ry="7" fill="#d4af6a" opacity="0.6" transform="rotate(45 45 35)" />
            <ellipse cx="70" cy="60" rx="14" ry="7" fill="#d4af6a" opacity="0.5" transform="rotate(55 70 60)" />
          </svg>
        </div>
        <div className="corner-decor corner-bottom-right" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none">
            <path
              d="M200 200 Q140 170 110 110 Q90 70 20 50"
              stroke="#d4af6a"
              strokeWidth="2"
              opacity="0.7"
            />
            <ellipse cx="180" cy="185" rx="14" ry="7" fill="#d4af6a" opacity="0.6" transform="rotate(30 180 185)" />
            <ellipse cx="155" cy="165" rx="14" ry="7" fill="#d4af6a" opacity="0.6" transform="rotate(45 155 165)" />
            <ellipse cx="130" cy="140" rx="14" ry="7" fill="#d4af6a" opacity="0.5" transform="rotate(55 130 140)" />
          </svg>
        </div>
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-right">Service Timings</h1>
          <SectionDivider />
        </div>

        <div className="service-grid" data-aos="fade-left">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>

              <div className="service-line"></div>

              <ul>
                {service.timings.map((time, index) => (
                  <li key={index}>{time}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="about_hero_mountains" aria-hidden="true" />

      </section>
    </main>
  );
};

export default Timing;
