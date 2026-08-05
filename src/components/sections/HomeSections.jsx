import { Link } from 'react-router-dom';
import { aboutContent, eventsCovered, galleryItems, rentals, services, testimonials } from '../../data/content';
import BookConsultationButton from '../ui/BookConsultationButton';
import SafeImage from '../ui/SafeImage';
import SectionHeading from '../ui/SectionHeading';
import './HomeSections.css';

const aboutImage =
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80';

export default function HomeAboutPreview() {
  return (
    <section className="home-about" aria-labelledby="home-about-heading">
      <div className="container home-about__grid">
        <div className="home-about__media">
          <SafeImage src={aboutImage} alt="Elegantly styled wedding dinner venue" />
          <div className="glass home-about__stats">
            {aboutContent.stats.map((stat) => (
              <div key={stat.label} className="home-about__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-about__body">
          <SectionHeading title="About Luxx Haven" description={aboutContent.intro} />
          <div className="home-about__values">
            {aboutContent.values.map((value) => (
              <article key={value.title} className="glass home-about__value">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
          <div className="home-about__actions">
            <Link to="/about" className="btn btn--outline">
              Learn More
            </Link>
            <BookConsultationButton className="btn">
              Book a Consultation
            </BookConsultationButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeServicesPreview() {
  return (
    <section className="home-services" aria-labelledby="home-services-heading">
      <div className="container">
        <SectionHeading
          title="Event Services"
          description="Decor & styling, curtain draping, floristry, food table decoration, venue styling, and backdrops — all under one roof."
        />
        <div className="home-services__grid">
          {services.map((service) => (
            <Link key={service.id} to="/services" className="service-tile">
              <SafeImage src={service.image} alt={service.title} className="service-tile__img" />
              <div className="glass service-tile__panel">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeRentalsPreview() {
  return (
    <section className="home-rentals" aria-labelledby="home-rentals-heading">
      <div className="container">
        <SectionHeading
          title="Rental Catalogue"
          description="Chairs, backdrops, tableware, linens, and more — everything you need to dress your event, available to hire."
        />
        <div className="home-rentals__grid">
          {rentals.map((item) => (
            <Link key={item.id} to="/rentals" className="rental-highlight">
              <SafeImage src={item.image} alt={item.name} className="rental-highlight__img" />
              <div className="glass rental-highlight__panel">
                <h3>{item.name}</h3>
                <p className="rental-highlight__price">{item.price}</p>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="home-rentals__cta">
          <Link to="/rentals" className="btn btn--outline">
            View Full Rental Catalogue
          </Link>
        </p>
      </div>
    </section>
  );
}

export function HomeEventsCovered() {
  return (
    <section className="home-events" aria-labelledby="home-events-heading">
      <div className="container">
        <SectionHeading
          title="Events Covered"
          description="From joyful milestones to tender farewells — every occasion styled with care."
        />
        <div className="home-events__grid">
          {eventsCovered.map((event) => (
            <article key={event.id} className="event-tile">
              <SafeImage src={event.image} alt={event.title} className="event-tile__img" />
              <div className="glass event-tile__panel">
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeGalleryPreview() {
  const previewItems = galleryItems.slice(0, 4);

  return (
    <section className="home-gallery" aria-labelledby="home-gallery-heading">
      <div className="container">
        <SectionHeading
          title="Recent Work"
          description="A glimpse of weddings, celebrations, and styled occasions from our portfolio."
        />
        <div className="home-gallery__grid">
          {previewItems.map((item) => (
            <Link key={item.id} to="/gallery" className="home-gallery__item">
              <SafeImage src={item.image} alt={item.title} />
              <div className="glass home-gallery__caption">
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </div>
            </Link>
          ))}
        </div>
        <p className="home-gallery__cta">
          <Link to="/gallery" className="btn btn--outline">
            View Full Gallery
          </Link>
        </p>
      </div>
    </section>
  );
}

export function HomeTestimonialsPreview() {
  const previewItems = testimonials.slice(0, 3);

  return (
    <section className="home-testimonials" aria-labelledby="home-testimonials-heading">
      <div className="container">
        <SectionHeading
          title="What Clients Say"
          description="Real feedback from weddings, celebrations, and remembrance services we've styled."
        />
        <div className="home-testimonials__grid">
          {previewItems.map((item) => (
            <blockquote key={item.id} className="glass home-testimonial">
              <p className="home-testimonial__stars" aria-label={`${item.rating} out of 5 stars`}>
                {'★'.repeat(item.rating)}
              </p>
              <p className="home-testimonial__quote">&ldquo;{item.quote}&rdquo;</p>
              <cite>
                {item.name}
                <span>{item.event}</span>
              </cite>
            </blockquote>
          ))}
        </div>
        <p className="home-testimonials__cta">
          <Link to="/testimonials" className="btn btn--outline">
            Read All Testimonials
          </Link>
        </p>
      </div>
    </section>
  );
}
