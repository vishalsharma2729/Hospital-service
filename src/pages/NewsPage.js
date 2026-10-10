import news1 from '../images/news-image1.jpg';
import news2 from '../images/news-image2.jpg';
import news3 from '../images/news-image3.jpg';
import newsDefault from '../images/news-image.jpg';

const newsItems = [
  {
    date: 'March 08, 2018',
    title: 'About Amazing Technology',
    description:
      'Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis. Praesent vel tincidunt ipsum, at semper mauris.',
    image: news1,
  },
  {
    date: 'February 20, 2018',
    title: 'Introducing a new healing process',
    description:
      'Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula. Vestibulum ut lorem justo.',
    image: news2,
  },
  {
    date: 'January 27, 2018',
    title: 'Review annual medical research',
    description:
      'Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim nulla et lectus consequat congue.',
    image: news3,
  },
  {
    date: 'December 18, 2017',
    title: 'Healthy habits for a stronger tomorrow',
    description:
      'Small lifestyle changes can significantly improve long-term wellness, reduce stress, and encourage better daily routines.',
    image: newsDefault,
  },
];

export default function NewsPage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-intro centered">
          <h1>Health News & Updates</h1>
          <p>Explore the latest stories, wellness insights, and medical breakthroughs from our team.</p>
        </div>

        <div className="news-grid full-news-grid">
          {newsItems.map((item) => (
            <article className="news-card" key={item.title}>
              <a href="/news" className="news-image-link">
                <img src={item.image} alt={item.title} />
              </a>
              <div className="news-content">
                <span>{item.date}</span>
                <h3>
                  <a href="/news">{item.title}</a>
                </h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
