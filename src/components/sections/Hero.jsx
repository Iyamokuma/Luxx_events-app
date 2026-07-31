import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { heroContent, heroImages, heroVideo } from '../../data/content';
import ArchedImageRow from '../ui/ArchedImageRow';
import './Hero.css';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      /* Autoplay may be blocked until interaction */
    });
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__video-wrap" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>
      </div>

      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__glow hero__glow--gold" aria-hidden="true" />
      <div className="hero__glow hero__glow--rose" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__panel hero__panel--animate">
          <p className="hero__eyebrow">{heroContent.eyebrow}</p>

          <h1 id="hero-title" className="hero__headline">
            {heroContent.headline}
          </h1>

          <p className="hero__description">{heroContent.description}</p>

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

        <div className="hero__visual hero__visual--animate">
          <div className="hero__visual-glow" aria-hidden="true" />
          <ul className="hero__orbit-labels" aria-hidden="true">
            {heroContent.orbitLabels.map((label, index) => (
              <li key={label} className={`hero__orbit-label hero__orbit-label--${index + 1}`}>
                {label}
              </li>
            ))}
          </ul>
          <ArchedImageRow images={heroImages} priorityFirst className="arched-row--hero" />
        </div>
      </div>
    </section>
  );
}
