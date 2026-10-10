export function TopBar() {
  return (
    <header className="topbar">
      <div className="container">
        <div className="topbar-inner">
          <div className="topbar-message">Welcome to a Professional Health Care</div>

          <div className="topbar-meta">
            <span className="meta-item">
              <i className="fa fa-phone" aria-hidden="true"></i>
              010-060-0160
            </span>
            <span className="meta-item">
              <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>
              6:00 AM - 10:00 PM (Mon-Fri)
            </span>
            <span className="meta-item">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <a href="mailto:info@company.com">info@company.com</a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
