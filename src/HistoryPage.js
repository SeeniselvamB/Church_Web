import React from 'react';
import { useEffect } from 'react';
import './HistoryPage.css';
import { Link } from 'react-router-dom';

function HistoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="history-page">
      <h2>History of the Church</h2>
      <p>
        Since 1816, they had been evangelizing in the Jaffna area under the "American Ceylon Mission", an organization affiliated with the American Mission.
        In those days, many American mission meetings expressed their desire to evangelize in Tamil Nadu, where the Tamil population was large,
        and especially in the Madurai region. However, that wish began to come true 18 years later.
        Rev. Levi Spaulding, an American missionary, found a place in Tamil Nadu to preach the gospel.
        Then, after submitting a report to the American Mission, he obtained permission and landed at Devipattinam, near Ramanathapuram, on January 10, 1834.

        They expanded their missionary work from Madurai to Thirumangalam in 1836.

        Rev. James Herrick was appointed as the missionary of the Thirumangalam district in 1846. He continued to serve in this capacity for a total of 37 years until 1883.
        He was the first to preach the gospel, especially in the Mallanginar and Chithumoondradaippu areas.

        <br /><br />
        <strong>Early period of the Chithumoondradaippu Church:</strong><br /> <br/>
        The evangelistic work began in the village of Chithumoondradaippu in 1857 by Rev. James Herrick, the missionary of the Thirumangalam district,
        Rev. A. Perumal, the priest of the Mallanginar parish, and the assistants.
        The number of Christians in Chithumoondradaippu in 1857 was very small. However, they were well-educated in Christian knowledge.
        The social status of women was very backward. The married women showed great interest in hearing the gospel.
        They were engaged in farming and business. In 1859, a new church was started in Chithumoondradaippu by the missionary Rev. James Herrick.
      </p>

      <Link to="/history/tamil" className="read-more-link">Translate to Tamil</Link>
    </div>
  );
}

export default HistoryPage;
