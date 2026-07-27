import SafeImage from './SafeImage';
import './ArchedImage.css';

export default function ArchedImage({ src, alt, className = '', priority = false }) {
  return (
    <div className={`arched-image ${className}`.trim()}>
      <SafeImage src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} />
    </div>
  );
}
