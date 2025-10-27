import React, { useEffect, useState } from 'react';
import { FaChurch, FaInstagram, FaYoutube } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Media.css';

const branchData = [
  {
    id: 1,
    title: 'KALKURICHI CHURCH',
    about:
      'This temple was built by Mr. T. Aseervadham, who put in considerable effort. The foundation stone was laid on 22.09.1990. On 10.11.1991, the consecration was done by the revered Mr. D.G. Pothirajulu. During the service of Rev. G.K. Chellappa, with the help of Mr. S. Jayapal and his family, this temple was expanded. The expanded temple was consecrated on 31.10.04 by the revered Mr. A. Kristopher. Mr. S. Jayapal has been serving as the pastor.',
  },
  {
    id: 2,
    title: 'THOPPUR CHURCH',
    about:
      'Located near Chithumoondradaippu, Thoppur Church has ministered for over four decades. Prayer meetings, Sabbath services and youth fellowships flourish here, making it a hub of spiritual growth.',
  },
  {
    id: 3,
    title: 'PUDHUPATTI CHURCH',
    about:
      'In 2003, while visiting the P. Puthuppatti church for the Christmas service, it was observed that the CSI church there had deteriorated significantly to the point where worship could not be conducted. Rev. G.K. Sellappa announced that it needed to be renovated. The church members, the management committee, and the youth of the Emmanuel church collectively contributed cement, sand, paint, and money to renovate the Puthuppatti church in 2005, allowing services and activities to continue, thanks to the grace of God. A family repaired the interrupted electrical connections. The work done by Brother Anbalagan, who led the maintenance efforts of the P. Puthuppatti church, was commendable.',
  },
  {
    id: 4,
    title: 'THONUGAL CHURCH',
    about:
      'Worship services are held every fourth Sunday of the month, uniting believers in prayer and fellowship in the Thonugal community.',
  },
  {
    id: 5,
    title: 'PAMPATTI CHURCH',
    about:
      'Gathering every second Sunday, Pampatti Church continues to nurture faith and spiritual connection through worship and service.',
  },
  {
    id: 6,
    title: 'KARISALKULAM CHURCH',
    about:
      'Meeting on the second Sunday of each month, Karisalkulam Church provides a space for consistent worship and community engagement.',
  },
];

function Media() {
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Disable page scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedBranch ? 'hidden' : 'auto';
  }, [selectedBranch]);

  return (
    <section className="media-section">
      <div className="media-overlay"></div>

      {/* === BRANCHES BOX === */}
      <div className="glass-card" data-aos="fade-up">
        <h2>Our Church Branches</h2>
        <div className="branch-grid">
          {branchData.map((branch, index) => (
            <div
              key={branch.id}
              className="branch-card simple-view"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedBranch(branch)}
            >
              <FaChurch className="branch-icon" />
              <h3>{branch.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* === FOLLOW US BOX === */}
      <div className="glass-card follow-box" data-aos="fade-up">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a
            href="https://www.instagram.com/csi_immanuel_church_cmu/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://youtube.com/@csiimmanuelchurchcmu?si=_GtFADRm2pBZYEVD"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaYoutube /> YouTube
          </a>
        </div>
      </div>

      {/* === MODAL === */}
      {selectedBranch && (
        <div className="modal-overlay" onClick={() => setSelectedBranch(null)}>
          <div
            className="modal-content glass-modal"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <FaChurch className="modal-icon" />
            <h2>{selectedBranch.title}</h2>
            <div className="modal-body">
              <p>{selectedBranch.about}</p>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedBranch(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Media;
