import { Link } from 'react-router-dom';
import { heroContent, heroImages } from '../../data/content';
import ArchedImageRow from '../ui/ArchedImageRow';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__dots" aria-hidden="true" />
      <div className="hero__glow hero__glow--top" aria-hidden="true" />
      <div className="hero__glow hero__glow--center" aria-hidden="true" />
      <div className="hero__glow hero__glow--bottom" aria-hidden="true" />

      <div className="hero__inner container">
        <p className="hero__eyebrow">{heroContent.eyebrow}</p>

        <h1 id="hero-title" className="hero__headline">
          {heroContent.headline}
        </h1>

        <p className="hero__description">{heroContent.description}</p>

        <div className="hero__visual">
          <div className="hero__visual-glow" aria-hidden="true" />
          <svg className="hero__orbit" viewBox="0 0 720 280" aria-hidden="true">
            <path
              d="M 80 220 Q 360 40 640 220"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <path
              d="M 120 240 Q 360 80 600 240"
              fill="none"
              stroke="rgba(201,166,107,0.18)"
              strokeWidth="1"
            />
          </svg>
          <ul className="hero__orbit-labels" aria-hidden="true">
            {heroContent.orbitLabels.map((label, index) => (
              <li key={label} className={`hero__orbit-label hero__orbit-label--${index + 1}`}>
                {label}
              </li>
            ))}
          </ul>
          <ArchedImageRow images={heroImages} priorityFirst className="arched-row--hero" />
        </div>

        <div className="hero__actions">
          <Link to="/contact" className="hero__cta-primary">
            {heroContent.ctaPrimary}
          </Link>
          <Link to="/gallery" className="hero__cta-link">
            {heroContent.ctaSecondary}
            <span aria-hidden="true">&rsaquo;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
