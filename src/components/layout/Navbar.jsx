import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../ui/Logo';
import BookConsultationButton from '../ui/BookConsultationButton';
import MobileMenuModal from '../ui/MobileMenuModal';
import { useContactModal } from '../../context/ContactModalContext';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Rentals', to: '/rentals' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openContact } = useContactModal();
  const location = useLocation();
  const isOnHero = location.pathname === '/';

  const closeMenu = () => setMenuOpen(false);

  const handleContact = () => {
    closeMenu();
    openContact();
  };

  return (
    <>
      <header className={`navbar${isOnHero ? ' navbar--on-hero' : ''}`}>
        <div className="navbar__inner container">
          <Logo className="navbar__logo" theme="default" />

          <nav className="navbar__nav navbar__nav--desktop" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `navbar__link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}

            <BookConsultationButton className="btn navbar__contact-btn">
              Book a Consultation
            </BookConsultationButton>
          </nav>

          <button
            type="button"
            className={`navbar__toggle${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-modal"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <MobileMenuModal
        isOpen={menuOpen}
        onClose={closeMenu}
        onContact={handleContact}
        theme="default"
      />
    </>
  );
}
