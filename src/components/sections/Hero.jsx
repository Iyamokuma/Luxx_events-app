import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { heroContent, heroVideo } from '../../data/content';
import './Hero.css';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.playsInline = true;

    const tryPlay = () => {
      video.play().catch(() => {
        /* Autoplay may be blocked until interaction */
      });
    };

    tryPlay();
    video.addEventListener('loadeddata', tryPlay);
    return () => video.removeEventListener('loadeddata', tryPlay);
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
          disablePictureInPicture
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>
      </div>

      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__copy hero__copy--animate">
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
      </div>
    </section>
  );
}
