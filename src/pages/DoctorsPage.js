import team1 from '../images/team-image1.jpg';
import team2 from '../images/team-image2.jpg';
import team3 from '../images/team-image3.jpg';

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
  {
    name: 'Thomas Brown',
    role: 'Neurology',
    phone: '010-060-0110',
    email: 'neuro@company.com',
    image: team2,
  },
  {
    name: 'Alicia Green',
    role: 'Pediatrics',
    phone: '010-080-0168',
    email: 'pediatrics@company.com',
    image: team1,
  },
  {
    name: 'Daniel Ross',
    role: 'Orthopedics',
    phone: '010-090-0198',
    email: 'ortho@company.com',
    image: team3,
  },
];

export default function DoctorsPage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-intro centered">
          <h1>Meet Our Doctors</h1>
          <p>Our specialists are here to support your health with expertise, empathy, and care.</p>
        </div>

        <div className="doctor-grid full-doctor-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.role}</p>
                <div className="doctor-contact">
                  <span>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    {doctor.phone}
                  </span>
                  <span>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <a href={`mailto:${doctor.email}`}>{doctor.email}</a>
                  </span>
                </div>
                <ul className="social-list">
                  {[
                    { icon: 'linkedin', href: 'https://www.linkedin.com' },
                    { icon: 'envelope', href: `mailto:${doctor.email}` },
                    { icon: 'facebook', href: 'https://www.facebook.com' },
                  ].map((item) => (
                    <li key={`${doctor.name}-${item.icon}`}>
                      <a
                        href={item.href}
                        className={`fa fa-${item.icon}`}
                        aria-label={item.icon}
                        target="_blank"
                        rel="noreferrer"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
