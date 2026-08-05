import BookConsultationButton from './BookConsultationButton';
import './PageCta.css';

export default function PageCta({
  title = 'Ready to style your occasion?',
  description = 'Share your date and vision — we will help you plan decor, styling, and rentals.',
}) {
  return (
    <section className="page-cta" aria-label="Book a consultation">
      <div className="container page-cta__inner">
        <div className="page-cta__copy">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <BookConsultationButton className="btn btn--accent page-cta__btn">
          Book a Consultation
        </BookConsultationButton>
      </div>
    </section>
  );
}
