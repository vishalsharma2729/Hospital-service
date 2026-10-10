export default function ContactPage() {
  return (
    <section className="section page-section contact-page">
      <div className="container">
        <div className="page-intro centered">
          <h1>Contact & Appointment</h1>
          <p>We are ready to help you with your health needs and organize your next consultation.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-details">
            <h3>Get in touch For Any Query</h3>
            <div className="contact-item">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>010-060-0160</span>
            </div>
            <div className="contact-item">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <span>info@company.com</span>
            </div>
            <div className="contact-item">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>123 Health Avenue, Wellness District</span>
            </div>
          </div>

          <div className="appointment-form-wrap page-form-wrap">
            <form className="appointment-form">
              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Full Name" />
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
              </div>

              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="date">Select Date</label>
                  <input type="date" id="date" />
                </div>

                <div className="field-group">
                  <label htmlFor="department">Select Department</label>
                  <select id="department" defaultValue="General Health">
                    <option>General Health</option>
                    <option>Cardiology</option>
                    <option>Dental</option>
                    <option>Medical Research</option>
                  </select>
                </div>
              </div>

              <div className="field-group full-width">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Phone" />
              </div>

              <div className="field-group full-width">
                <label htmlFor="message">Additional Message</label>
                <textarea id="message" rows="5" placeholder="Message"></textarea>
              </div>

              <button type="submit" className="submit-button">
                Submit Button
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
