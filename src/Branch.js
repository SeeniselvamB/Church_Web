// src/Branch.js
import React from 'react';
import './Branch.css';
import { Link } from 'react-router-dom';
import img1 from './images/Church2.jpg';
import img2 from './images/Church2.jpg';
import img3 from './images/Church2.jpg';
import img4 from './images/Church2.jpg';
import img5 from './images/Church2.jpg';
import img6 from './images/Church2.jpg';


function Branch() {
  const branches = [
    { id: 1, image: img1, title: 'KALKURICHI' },
    { id: 2, image: img2, title: 'THOPPUR' },
    { id: 3, image: img3, title: 'PUDHUPATTI' },
    { id: 4, image: img4, title: 'THONUGAL' },
    { id: 5, image: img5, title: 'PAMPATTI' },
    { id: 6, image: img6, title: 'KARISALKULAM' },
  ];

  return (
    <section className="branch-section">
      <h2>Our Church Branches</h2>
      <div className="branch-grid">
        {branches.map((branch) => (
          <Link key={branch.id} to={`/branch/${branch.id}`} className="branch-card">
            <img src={branch.image} alt={branch.title} />
            <h3>{branch.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Branch;
