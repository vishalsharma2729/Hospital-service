import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Updates', to: '/news' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <div className="container nav-shell">
        <NavLink to="/" className="brand" aria-label="Health Center home">
          <i className="fa fa-h-square" aria-hidden="true"></i>
          Health Center
        </NavLink>

        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
          {/* <NavLink className="appointment-pill" to="/contact">
            Make an appointment
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
}
