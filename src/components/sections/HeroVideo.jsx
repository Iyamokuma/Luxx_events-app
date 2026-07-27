import { useEffect, useRef } from 'react';
import { heroVideo } from '../../data/content';
import './HeroVideo.css';

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const keepPlaying = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    video.play().catch(() => {});

    /* Ignore hover / tap so playback and UI stay uninterrupted */
    const blockInteraction = (event) => {
      event.preventDefault();
      event.stopPropagation();
      keepPlaying();
    };

    video.addEventListener('click', blockInteraction);
    video.addEventListener('touchstart', blockInteraction, { passive: false });
    video.addEventListener('touchend', blockInteraction, { passive: false });
    video.addEventListener('pointerdown', blockInteraction);
    video.addEventListener('pause', keepPlaying);

    return () => {
      video.removeEventListener('click', blockInteraction);
      video.removeEventListener('touchstart', blockInteraction);
      video.removeEventListener('touchend', blockInteraction);
      video.removeEventListener('pointerdown', blockInteraction);
      video.removeEventListener('pause', keepPlaying);
    };
  }, []);

  return (
    <section className="hero-video" aria-label="Event styling showcase video">
      <div className="hero-video__glow hero-video__glow--left" aria-hidden="true" />
      <div className="hero-video__glow hero-video__glow--right" aria-hidden="true" />

      <div className="container hero-video__inner">
        <div className="hero-video__frame">
          <video
            ref={videoRef}
            className="hero-video__player"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            tabIndex={-1}
            aria-hidden="true"
          >
            <source src={heroVideo.src} type="video/mp4" />
          </video>
          <div className="hero-video__shield" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
