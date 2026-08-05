import PageMeta from '../components/ui/PageMeta';
import PageCta from '../components/ui/PageCta';
import { seo, testimonials } from '../data/content';
import './Testimonials.css';

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <PageMeta {...seo.testimonials} path="/testimonials" />
      <header className="page-header container">
        <h1>Testimonials</h1>
        <p>Trusted by couples, brands, and hosts who expect refined design and flawless execution.</p>
      </header>

      <section className="section container">
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="testimonial-card card">
              <div className="card__body">
                <Stars count={item.rating} />
                <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <cite>{item.name}</cite>
                  <p className="muted">{item.event}</p>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <PageCta
        title="Ready for your own story?"
        description="Start with a consultation — share your date, guest count, and the look you have in mind."
      />
    </>
  );
}
