import { Link } from 'react-router-dom';
import './Logo.css';

const LOGO = {
  default: '/images/luxx-haven-logo-transparent.png',
  light: '/images/luxx-haven-logo-light.png',
};

const LOGO_ALT = 'Luxx Haven Events';

export default function Logo({ className = '', theme = 'default' }) {
  const src = theme === 'light' ? LOGO.light : LOGO.default;

  return (
    <Link to="/" className={`logo ${className}`.trim()} aria-label={`${LOGO_ALT} home`}>
      <span className="logo__frame">
        <img src={src} alt={LOGO_ALT} className="logo__image" decoding="async" />
      </span>
    </Link>
  );
}
