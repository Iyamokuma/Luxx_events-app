import { useState } from 'react';
import './SafeImage.css';

export default function SafeImage({ src, alt, loading = 'lazy', className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`safe-image__fallback ${className}`.trim()} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
