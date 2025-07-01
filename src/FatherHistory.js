// src/FatherHistory.js
import React, { useEffect } from 'react';
import './FatherHistory.css';
import father1 from './images/Church2.jpg';
import father2 from './images/Church2.jpg';
import father3 from './images/Church2.jpg';

const pastFathers = [
  { id: 1, name: 'Rev. A. Perumal', years: '1857 - 1872', image: father1 },
  { id: 2, name: 'Rev. James Herrick', years: '1873 - 1883', image: father2 },
  { id: 3, name: 'Rev. D. Rajan', years: '1995 - 2008', image: father3 },
];

function FatherHistory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="history-section">
      <div className="history-container">
        <h2>Past Fathers</h2>
        <div className="father-history-list">
          {pastFathers.map(father => (
            <div key={father.id} className="father-card">
              <img src={father.image} alt={father.name} />
              <h3>{father.name}</h3>
              <p>{father.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FatherHistory;
