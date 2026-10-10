import { Hero } from '../components/Hero';
import team1 from '../images/team-image1.jpg';
import team2 from '../images/team-image2.jpg';
import team3 from '../images/team-image3.jpg';
import news1 from '../images/news-image1.jpg';
import news2 from '../images/news-image2.jpg';
import news3 from '../images/news-image3.jpg';
import authorImage from '../images/author-image.jpg';

const doctors = [
  {
    name: 'Nate Baston',
    role: 'General Principal',
    phone: '010-020-0120',
    email: 'general@company.com',
    image: team1,
  },
  {
    name: 'Jason Stewart',
    role: 'Pregnancy',
    phone: '010-070-0170',
    email: 'pregnancy@company.com',
    image: team2,
  },
  {
    name: 'Miasha Nakahara',
    role: 'Cardiology',
    phone: '010-040-0140',
    email: 'cardio@company.com',
    image: team3,
  },
];

const news = [
  {
    date: 'March 08, 2018',
    title: 'About Amazing Technology',
    description: 'Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis.',
    author: 'Jeremie Carlson',
    role: 'CEO / Founder',
    image: news1,
  },
  {
    date: 'February 20, 2018',
    title: 'Introducing a new healing process',
    description: 'Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.',
    author: 'Jason Stewart',
    role: 'General Director',
    image: news2,
  },
  {
    date: 'January 27, 2018',
    title: 'Review Annual Medical Research',
    description: 'Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim.',
    author: 'Andrio Abero',
    role: 'Online Advertising',
    image: news3,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-layout">
            <div className="about-copy reveal">
              <h2>
                Welcome to Your <span className="brand-mark">ealth Center</span>
              </h2>
              <p>
                Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur
                lacinia nisi vitae velit volutpat venenatis.
              </p>
              <p>
                Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna
                mattis. Ut placerat, diam a tempus vehicula.
              </p>

              <div className="profile-card">
                <img src={team2} alt="Dr. Neil Jackson" />
                <div>
                  <h3>Dr. Neil Jackson</h3>
                  <p>General Principal</p>
                </div>
              </div>
            </div>

            <div className="about-panel reveal" style={{ animationDelay: '0.2s' }}>
              <div className="info-badge">
                <strong>24/7</strong>
                <span>Emergency support</span>
              </div>
              <div className="info-badge">
                <strong>25k+</strong>
                <span>Patients cared for</span>
              </div>
              <div className="info-badge">
                <strong>15+</strong>
                <span>Medical specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="section news-section">
        <div className="container">
          <div className="section-heading centered reveal">
            <h2>Latest News</h2>
          </div>

          <div className="news-grid">
            {news.map((article, index) => (
              <article className="news-card reveal" key={article.title} style={{ animationDelay: `${Math.min(0.2 + index * 0.12, 0.7)}s` }}>
                <a href="/news" className="news-image-link">
                  <img src={article.image} alt={article.title} />
                </a>
                <div className="news-content">
                  <span>{article.date}</span>
                  <h3>
                    <a href="/news">{article.title}</a>
                  </h3>
                  <p>{article.description}</p>
                  <div className="news-author">
                    <img src={authorImage} alt={article.author} />
                    <div>
                      <h5>{article.author}</h5>
                      <p>{article.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
