import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BranchDetail.css';

const branchData = {
  1: {
    image: '/Kalkurichi.png',
    title: 'KALKURICHI Church',
    about: 'This temple was built by Mr. T. Aseervadham, who put in considerable effort. The foundation stone was laid on 22.09.1990. On 10.11.1991, the consecration was done by the revered Mr. D.G. Pothirajulu. During the service of Rev. G.K. Chellappa, with the help of Mr. S. Jayapal and his family, this temple was expanded. The expanded temple was consecrated on 31.10.04 by the revered Mr. A. Kristopher.Mr. S. Jayapal has been serving as the pastor.',
  },
  2: {
    image: '/images/Church2.jpg',
    title: 'THOPPUR CHURCH',
    about: 'There was a temple in the village of Thoppur, 1/2 km from Chithumoondradaippu, 40 years ago. The Lord gave us the grace to start a ministry there.Here too, prayer meetings, home visits, Sabbath services, and vacation Bible school programs are being held continuously through young brothers and sisters. There was a temple before the time of the elders. The Lord gave grace to start the ministry there..',
  },
  3: {
    image: '/Pudhupatti.jpg',
    title: 'PUDHUPATTI CHURCH',
    about: 'In 2003, while visiting the P. Puthuppatti church for the Christmas service, it was observed that the CSI church there had deteriorated significantly to the point where worship could not be conducted. Rev. G.K. Sellappa announced that it needed to be renovated. The church members, the management committee, and the youth of the Emmanuel church collectively contributed cement, sand, paint, and money to renovate the Puthuppatti church in 2005, allowing services and activities to continue, thanks to the grace of God. A family repaired the interrupted electrical connections. The work done by Brother Anbalagan, who led the maintenance efforts of the P. Puthuppatti church, was commendable.',
  },
  4: {
    image: '/images/Church2.jpg',
    title: 'THONUGAL CHURCH',
    about: 'Church will be conducted on every months fourth sunday.',
  },
  5: {
    image: '/images/Church2.jpg',
    title: 'PAMPATTI CHURCH',
    about: 'Church will be conducted on every months second sunday.',
  },
  6: {
    image: '/images/Church2.jpg',
    title: 'KARISALKULAM CHURCH',
    about: 'Church will be conducted on every months second sunday.',
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
