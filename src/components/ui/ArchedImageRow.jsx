import ArchedImage from './ArchedImage';
import './ArchedImageRow.css';

export default function ArchedImageRow({ images, priorityFirst = false, className = '' }) {
  return (
    <div className={`arched-row ${className}`.trim()} role="list" aria-label="Event gallery preview">
      {images.map((image, index) => (
        <div key={image.src + index} className="arched-row__item" role="listitem">
          <ArchedImage
            src={image.src}
            alt={image.alt}
            priority={priorityFirst && index < 2}
          />
        </div>
      ))}
    </div>
  );
}
