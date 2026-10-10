import { Outlet } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import newsImage from '../images/news-image.jpg';

export default function Layout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-column">
            <h4>Contact Info</h4>
            <p>
              Fusce at libero iaculis, venenatis augue quis, pharetra lorem. Curabitur ut dolor eu
              elit consequat ultricies.
            </p>

            <div className="contact-info">
              <p>
                <i className="fa fa-phone" aria-hidden="true"></i>
                010-070-0170
              </p>
              <p>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h4>Latest News</h4>

            <div className="latest-story">
              <img src={newsImage} alt="Amazing Technology" />
              <div>
                <a href="/news">Amazing Technology</a>
                <span>March 08, 2018</span>
              </div>
            </div>

            <div className="latest-story">
              <img src={newsImage} alt="New Healing Process" />
              <div>
                <a href="/news">New Healing Process</a>
                <span>February 20, 2018</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4>Opening Hours</h4>
            <div className="opening-hours">
              <p>
                Monday - Friday <span>06:00 AM - 10:00 PM</span>
              </p>
              <p>
                Saturday <span>09:00 AM - 08:00 PM</span>
              </p>
              <p>
                Sunday <span>Closed</span>
              </p>
            </div>

            <ul className="social-list footer-socials">
              <li>
                <a href="https://www.facebook.com" className="fa fa-facebook-square" aria-label="Facebook" target="_blank" rel="noreferrer" />
              </li>
              <li>
                <a href="https://twitter.com" className="fa fa-twitter" aria-label="Twitter" target="_blank" rel="noreferrer" />
              </li>
              <li>
                <a href="https://www.instagram.com" className="fa fa-instagram" aria-label="Instagram" target="_blank" rel="noreferrer" />
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <div className="copyright">
              <p>
                Copyright © 2017 Your Company | Design:{' '}
                <a href="http://www.tooplate.com" target="_blank" rel="noreferrer">
                  Tooplate
                </a>
              </p>
            </div>

            <div className="footer-links">
              <a href="/about">Laboratory Tests</a>
              <a href="/doctors">Departments</a>
              <a href="/contact">Insurance Policy</a>
              <a href="/news">Careers</a>
            </div>

            <div className="scroll-top">
              <a href="/#top" aria-label="Back to top">
                <i className="fa fa-angle-up" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
