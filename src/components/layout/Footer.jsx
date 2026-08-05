import { Link } from 'react-router-dom';
import { navLinks, site } from '../../data/content';
import BookConsultationButton from '../ui/BookConsultationButton';
import Logo from '../ui/Logo';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__accent-line" aria-hidden="true" />

      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo className="footer__logo" theme="light" />
          <p className="footer__tagline">{site.tagline}</p>
          <BookConsultationButton className="btn footer__cta">
            Book a Consultation
          </BookConsultationButton>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <p className="footer__heading">Explore</p>
          <div className="footer__nav-links">
            <Link to="/" className="footer__link">
              Home
            </Link>
            {navLinks.map((link) =>
              link.to === '/contact' ? (
                <BookConsultationButton key={link.to} className="footer__link">
                  {link.label}
                </BookConsultationButton>
              ) : (
                <Link key={link.to} to={link.to} className="footer__link">
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </nav>

        <div className="footer__contact">
          <p className="footer__heading">Get in Touch</p>
          <a href={`mailto:${site.email}`} className="footer__contact-link">
            {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="footer__contact-link">
            {site.phone}
          </a>
          <p className="footer__address">{site.address}</p>
          <p className="footer__hours">{site.hours}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p className="footer__credit">Decor &middot; Styling &middot; Rentals</p>
        </div>
      </div>
    </footer>
  );
}
