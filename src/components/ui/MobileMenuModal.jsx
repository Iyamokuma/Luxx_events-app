import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './MobileMenuModal.css';

const mobileNavLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Rentals', to: '/rentals' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
];

export default function MobileMenuModal({ isOpen, onClose, onContact, theme = 'default' }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-modal" role="presentation">
      <button
        type="button"
        className="mobile-menu-modal__backdrop"
        aria-label="Close menu"
        onClick={onClose}
      />

      <div
        className="mobile-menu-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="mobile-menu-modal__header">
          <Logo theme={theme === 'light' ? 'light' : 'default'} />
          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-menu-modal__close"
            aria-label="Close menu"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <p id="mobile-menu-title" className="sr-only">
          Main navigation
        </p>

        <nav className="mobile-menu-modal__nav" aria-label="Mobile navigation">
          {mobileNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `mobile-menu-modal__link${isActive ? ' is-active' : ''}`
              }
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button type="button" className="btn mobile-menu-modal__cta" onClick={onContact}>
          Book a Consultation
        </button>
      </div>
    </div>
  );
}
