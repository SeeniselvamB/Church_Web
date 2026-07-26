import React from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import churchImage from "../image.png";
import "../styles/Home.css";

export default function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="hero">
      <img
        src={churchImage}
        alt="CSI Immanuel Church"
        className="hero__image"
      />
      <div className="hero__overlay" />
      <Navbar />

      <div className="hero__content">
        <span className="hero__eyebrow">Welcome to</span>
        <div className="hero__divider" />
        <h1 className="hero__title">
          CSI IMMANUEL CHURCH
        </h1>
        <p className="hero__location">Chithumoondradaippu</p>
        <div className="hero__divider" />

        <blockquote className="hero__quote">
          The Lord is my shepherd;
          <br />
          I shall not want.
          <cite>Psalm 23:1</cite>
        </blockquote>

        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => scrollToSection("timing")}
          >
            Join Us <ChevronRight size={16} strokeWidth={2.5} />
          </button>

          <button
            className="hero__btn hero__btn--secondary"
            onClick={() => scrollToSection("about")}
          >
            View More <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

    </section>
  );
}
