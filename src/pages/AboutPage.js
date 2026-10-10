import aboutBg from '../images/about-bg.jpg';

export default function AboutPage() {
  return (
    <section className="section page-section about-page">
      <div className="container">
        <div className="page-intro">
          <h1>About Our Hospital</h1>
          <p>
            We are committed to giving every patient compassionate, personalized care backed by
            modern technology and a team of experienced specialists.
          </p>
        </div>

        <div className="page-banner" style={{ backgroundImage: `linear-gradient(rgba(15, 57, 94, 0.56), rgba(15, 57, 94, 0.7)), url(${aboutBg})` }}>
          <div className="page-banner-content">
            <span>Quality Care</span>
            <h2>Compassionate healthcare for every stage of life.</h2>
          </div>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <h3>Our Mission</h3>
            <p>
              To improve lives through prevention, diagnosis, and treatment with empathy and
              excellence in every interaction.
            </p>
          </div>
          <div className="story-card">
            <h3>Our Vision</h3>
            <p>
              To become the leading community healthcare destination where innovation and patient
              trust come together.
            </p>
          </div>
          <div className="story-card">
            <h3>Our Values</h3>
            <p>
              Safety, respect, collaboration, and continuous learning guide every decision we make.
            </p>
          </div>
        </div>

        <div className="about-layout alt-layout">
          <div className="about-copy">
            <h2>Trusted care for healthier communities</h2>
            <p>
              Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia
              nisi vitae velit volutpat venenatis. Sed a dignissim lacus. Quisque fermentum est non
              orci commodo, a luctus urna mattis.
            </p>
            <p>
              We blend advanced clinical expertise with a warm, patient-centered experience designed
              around your needs.
            </p>
          </div>

          <div className="about-panel">
            <div className="info-badge">
              <strong>12+</strong>
              <span>Years of service</span>
            </div>
            <div className="info-badge">
              <strong>96%</strong>
              <span>Patient satisfaction</span>
            </div>
            <div className="info-badge">
              <strong>50K+</strong>
              <span>Checkups completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
