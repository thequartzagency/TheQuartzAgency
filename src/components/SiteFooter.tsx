import { Link } from "@tanstack/react-router";
import logo from "@/assets/quartz-logo.png";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <span className="footer-logo">
              <img src={logo} alt="The Quartz Agency" />
            </span>
            <p>
              Premium South African recruitment solutions connecting exceptional people
              with exceptional organisations.
            </p>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/employers">For Employers</Link></li>
              <li><Link to="/candidates">For Candidates</Link></li>
              <li><Link to="/services">Executive Search</Link></li>
              <li><Link to="/services">Staffing Solutions</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <ul>
              <li><i className="fa-solid fa-location-dot" />Cape Town, South Africa</li>
              <li><i className="fa-solid fa-phone" />+27 XX XXX XXXX</li>
              <li><i className="fa-solid fa-envelope" />info@thequartzagency.co.za</li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 The Quartz Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
