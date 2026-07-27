import PageMeta from '../components/ui/PageMeta';
import SafeImage from '../components/ui/SafeImage';
import SectionHeading from '../components/ui/SectionHeading';
import { eventsCovered, services, seo } from '../data/content';
import './Services.css';

export default function Services() {
  return (
    <>
      <PageMeta {...seo.services} path="/services" />
      <header className="page-header container">
        <h1>Event Services</h1>
        <p>Decor, draping, floristry, and styling — tailored to every occasion, from weddings to celebrations of life.</p>
      </header>

      <section className="section container">
        <div className="services-list">
          {services.map((service, index) => (
            <article key={service.id} className={`service-card${index % 2 === 1 ? ' service-card--reverse' : ''}`}>
              <div className="service-card__media">
                <SafeImage src={service.image} alt={service.title} />
              </div>
              <div className="service-card__body">
                <h2>{service.title}</h2>
                <p className="muted">{service.summary}</p>
                <ul>
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tight container" aria-labelledby="events-covered-heading">
        <SectionHeading
          title="Events Covered"
          description="Whatever the occasion, we style it with the same care and attention to detail."
        />
        <div className="grid-3">
          {eventsCovered.map((event) => (
            <article key={event.id} className="card">
              <div className="card__body">
                <h3>{event.title}</h3>
                <p className="muted">{event.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
