// src/BranchDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './BranchDetail.css';
import img1 from './images/Church.png';
import img2 from './images/Church2.jpg';
import img3 from './images/Church2.jpg';
import img4 from './images/Church2.jpg';
import img5 from './images/Church2.jpg';
import img6 from './images/Church2.jpg';

const branchData = {
  1: {
    image: img1,
    title: 'KALKURICHI Church',
    about: 'This is the description for Branch Church 1.',
  },
  2: {
    image: img2,
    title: 'THOPPUR CHURCH',
    about: 'This is the description for Branch Church 2.',
  },
  3: {
    image: img3,
    title: 'PUDHUPATTI CHURCH',
    about: 'This is the description for Branch Church 3.',
  },
  4: {
    image: img4,
    title: 'THONUGAL CHURCH',
    about: 'This is the description for Branch Church 4.',
  },
  5: {
    image: img5,
    title: 'PAMPATTI CHURCH',
    about: 'This is the description for Branch Church 4.',
  },
  6: {
    image: img6,
    title: 'KARIALKULAM CHURCH',
    about: 'This is the description for Branch Church 4.',
  },
};

function BranchDetail() {
  const { id } = useParams();
  const branch = branchData[id];

  if (!branch) return <p>Branch not found.</p>;

  return (
    <div className="branch-detail">
      <h2>{branch.title}</h2>
      <img src={branch.image} alt={branch.title} />
      <p>{branch.about}</p>
    </div>
  );
}

export default BranchDetail;
