import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const verses = [
    '"The Lord is my shepherd; I shall not want." – Psalm 23:1',
    '"I can do all things through Christ who strengthens me." – Philippians 4:13',
    '"For I know the plans I have for you." – Jeremiah 29:11',
    '"Be strong and courageous. Do not be afraid." – Joshua 1:9',
    '"Trust in the Lord with all your heart." – Proverbs 3:5',
    '"Let your light shine before others." – Matthew 5:16',
    '"Peace I leave with you; my peace I give you." – John 14:27'
  ];

  const verseColors = [
    '#FFB6C1', // Light Pink
    '#FFD700', // Light Gold
    '#ADFF2F', // Light Green
    '#87CEFA', // Light Blue
    '#E6E6FA', // Lavender
    '#F0E68C', // Khaki
    '#FFA07A'  // Light Salmon
  ];

  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const verseRef = useRef(null);

  // Auto change verse
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prev) => (prev + 1) % verses.length);
    }, 3250);
    return () => clearInterval(interval);
  }, [verses.length]);

  // Dynamically resize font to keep verse on a single line
  useEffect(() => {
    const verseEl = verseRef.current;
    if (!verseEl) return;

    verseEl.style.fontSize = "1.2rem"; // reset
    let currentSize = 1.2;
    while (verseEl.scrollWidth > verseEl.offsetWidth && currentSize > 0.5) {
      currentSize -= 0.02;
      verseEl.style.fontSize = `${currentSize}rem`;
    }
  }, [currentVerseIndex]);

  return (
    <section className="home-section" id="home">
      <div
        className="verse-banner"
        key={currentVerseIndex}
        ref={verseRef}
        style={{ color: verseColors[currentVerseIndex] }}
      >
        <p style={{ margin: 0 }}>{verses[currentVerseIndex]}</p>
      </div>

      <div className="home-overlay">
        <div className="home-text">
          <h1 className="home-title" data-aos="fade-up" data-aos-delay="200">
            CSI IMMANUEL CHURCH
          </h1>
          <h2 className="home-subtitle" data-aos="zoom-in" data-aos-delay="400">
            CHITHUMOONDRADAIPPU
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
