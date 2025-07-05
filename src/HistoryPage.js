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
      <h3 className="table-title">American Missionaries</h3>
<table className="pastor-table">
  <thead>
    <tr>
      <th>Pastor Name</th>
      <th>Years of Service</th>
    </tr>
  </thead>
  <tbody>
    {[
      { name: 'Rev. James Herrick', years: '1849–1883' },
      { name: 'Rev. J.E. Tracey', years: '1884–1888' },
      { name: 'Rev. J.C. Perkins', years: '1889–1903' },
      { name: 'Rev. H.C. Hassan', years: '1904–1909' },
      { name: 'Rev. J.E. Jeffry', years: '1910–1920' },
      { name: 'Rev. E.E. White', years: '1921–1940' }
    ].map((pastor, index) => (
      <tr key={index}>
        <td>{pastor.name}</td>
        <td>{pastor.years}</td>
      </tr>
    ))}
  </tbody>
</table>

<h3 className="table-title">Indian Pastors</h3>
<table className="pastor-table">
  <thead>
    <tr>
      <th>Pastor Name</th>
      <th>Years of Service</th>
    </tr>
  </thead>
  <tbody>
    {[
      { name: 'Rev. R.G. Dudley', years: '1941–1943' },
      { name: 'Rev. P.K. Edward', years: '1944–1946' },
      { name: 'Rev. G.P. James', years: '1947' },
      { name: 'Rev. G. Durairaj', years: '1948' },
      { name: 'Rev. David John', years: '1949–1952' },
      { name: 'Rev. E.J. Edwin Selvaraj', years: '1953–1956' },
      { name: 'Rev. D. Collins', years: '1957–1961' },
      { name: 'Rev. K. Robert Muthiah', years: '1962–1963' },
      { name: 'Rev. S. Bhakiyanathan', years: '1964–1966' },
      { name: 'Rev. M.R. Ebenezer', years: '1967–1972' },
      { name: 'Rev. K. Robert Muthiah', years: '1973–1980' },
      { name: 'Rev. W. Paulraj Swamidass', years: '1981–1988' },
      { name: 'Rev. R. Adhisayam', years: '1989' },
      { name: 'Rev. J. Thangaiya', years: '1990–1991' },
      { name: 'Rev. T. Rayappa', years: '1992' },
      { name: 'Rev. P. Jeyachandran', years: '1993–1996' },
      { name: 'Rev. A. Christopher Aseer', years: '1997–1998' },
      { name: 'Rev. S. Johnrash Kamalam', years: '1999–2003' },
      { name: 'Rev. G.K. Chellappa', years: '2004–2005' },
      { name: 'Rev. K. Yesudhas', years: '2006' },
      { name: 'Rev. G. Sam Chellappa', years: '2007' },
      { name: 'Rev. D. Anburaj', years: '2008' },
      { name: 'Rev. S. Jothinayagam', years: '2009–2019' },
      { name: 'Rev. R. Kalidashan Peter', years: '2019–Present' }
    ].map((pastor, index) => (
      <tr key={index}>
        <td>{pastor.name}</td>
        <td>{pastor.years}</td>
      </tr>
    ))}
  </tbody>
</table>


      <Link to="/history/tamil" className="read-more-link">Translate to Tamil</Link>
    </div>
  );
}

export default HistoryPage;
