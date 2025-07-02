
import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './BranchDetail.css';
import img1 from './images/Kalkurichi.png';
import img2 from './images/Church2.jpg';
import img3 from './images/Pudupatti.png';
import img4 from './images/Church2.jpg';
import img5 from './images/Church2.jpg';
import img6 from './images/Church2.jpg';

const branchData = {
  1: {
    image: img1,
    title: 'KALKURICHI Church',
    about: 'This temple was built by Mr. T. Aseervadham, who put in considerable effort. The foundation stone was laid on 22.09.1990. On 10.11.1991, the consecration was done by the revered Mr. D.G. Pothirajulu. During the service of Rev. G.K. Chellappa, with the help of Mr. S. Jayapal and his family, this temple was expanded. The expanded temple was consecrated on 31.10.04 by the revered Mr. A. Kristopher.Mr. S. Jayapal has been serving as the pastor.',
  },
  2: {
    image: img2,
    title: 'THOPPUR CHURCH',
    about: 'This is the description for Branch Church 2.',
  },
  3: {
    image: img3,
    title: 'PUDHUPATTI CHURCH',
    about: 'In 2003, when we gathered at the church for a Christmas song and went to P. Puthuppatti, the CSI church there was in a very dilapidated condition, making it impossible to conduct worship. Rev. G. K. Sellappa announced that it needed to be renovated. The church members, the administration team, and the youth of the Immanuel church contributed cement, sand, paint, and money to the Puthuppatti church, which was renovated in 2005, and the services and celebrations continued by the grace of the Lord. A family repaired the disconnected electricity connection. The work done by Brother Mr. Anbazhagan, who led the maintenance work of the P. Puthuppatti church, was excellent.',
  },
  4: {
    image: img4,
    title: 'THONUGAL CHURCH',
    about: 'This is the description for Branch Church 4.',
  },
  5: {
    image: img5,
    title: 'PAMPATTI CHURCH',
    about: 'This is the description for Branch Church 5.',
  },
  6: {
    image: img6,
    title: 'KARISALKULAM CHURCH',
    about: 'This is the description for Branch Church 6.',
  },
};

function BranchDetail() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const { id } = useParams();
  const branch = branchData[id];

  if (!branch) return <p>Branch not found.</p>;

  return (
    <div className="branch-detail">
      <div
        className="branch-image-section"
        style={{ backgroundImage: `url(${branch.image})` }}
      >
        <div className="branch-overlay">
          <h2>{branch.title}</h2>
        </div>
      </div>
      <div className="branch-detail-container">
        <p>{branch.about}</p>
      </div>
    </div>
  );
}

export default BranchDetail;

