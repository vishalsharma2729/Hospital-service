import { useEffect, useState } from 'react';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';

const slides = [
  {
    eyebrow: "Let's make your life happier",
    title: 'Healthy Living',
    buttonText: 'Meet Our Doctors',
    buttonClass: 'primary',
    image: slider1,
  },
  {
    eyebrow: 'Aenean luctus lobortis tellus',
    title: 'New Lifestyle',
    buttonText: 'More About Us',
    buttonClass: 'secondary',
    image: slider2,
  },
  {
    eyebrow: 'Pellentesque nec libero nisi',
    title: 'Your Health Benefits',
    buttonText: 'Read Stories',
    buttonClass: 'tertiary',
    image: slider3,
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <article
            key={slide.title}
            className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(15, 57, 94, 0.42), rgba(15, 57, 94, 0.72)), url(${slide.image})`,
            }}
          >
            <div className="container slide-content">
              <div className="slide-inner">
                <p>{slide.eyebrow}</p>
                <h1>{slide.title}</h1>
                <a href="#team" className={`section-btn ${slide.buttonClass}`}>
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </article>
        ))}

        <div className="hero-dots" aria-label="Banner navigation">
          {slides.map((slide, index) => (
            <button
              key={`${slide.title}-dot`}
              type="button"
              className={`hero-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
