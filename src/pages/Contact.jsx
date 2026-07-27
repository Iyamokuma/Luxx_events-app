import PageMeta from '../components/ui/PageMeta';
import EnquiryForm from '../components/ui/EnquiryForm';
import SectionHeading from '../components/ui/SectionHeading';
import { seo, site } from '../data/content';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <PageMeta {...seo.contact} path="/contact" />
      <header className="page-header container">
        <h1>Contact</h1>
        <p>Tell us about your event and we will respond within one business day.</p>
      </header>

      <section className="section container">
        <div className="contact-grid">
          <div className="contact-info">
            <SectionHeading title="Get In Touch" />
            <ul>
              <li>
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              </li>
              <li>
                <span>Studio</span>
                <p>{site.address}</p>
              </li>
              <li>
                <span>Hours</span>
                <p>{site.hours}</p>
              </li>
            </ul>
          </div>

          <div>
            <SectionHeading title="Enquiry &amp; Booking Form" />
            <EnquiryForm id="contact-enquiry-form" source="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
