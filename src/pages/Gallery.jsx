import { useMemo, useState } from 'react';
import PageMeta from '../components/ui/PageMeta';
import PageCta from '../components/ui/PageCta';
import SafeImage from '../components/ui/SafeImage';
import { galleryCategories, galleryItems, seo } from '../data/content';
import './Gallery.css';

export default function Gallery() {
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () => (category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category)),
    [category],
  );

  return (
    <>
      <PageMeta {...seo.gallery} path="/gallery" />
      <header className="page-header container">
        <h1>Event Gallery</h1>
        <p>A selection of weddings, corporate experiences, and private celebrations crafted by our team.</p>
      </header>

      <section className="section container">
        <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
          {galleryCategories.map((item) => (
            <button
              key={item}
              type="button"
              className={`gallery-filter${category === item ? ' is-active' : ''}`}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item) => (
            <figure key={item.id} className="gallery-item">
              <SafeImage src={item.image} alt={item.title} />
              <figcaption>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <PageCta
        title="Love what you see?"
        description="Book a consultation and we'll help style your wedding, celebration, or remembrance service."
      />
    </>
  );
}
