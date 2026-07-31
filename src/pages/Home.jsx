import PageMeta from '../components/ui/PageMeta';
import Hero from '../components/sections/Hero';
import HomeAboutPreview, {
  HomeEventsCovered,
  HomeRentalsPreview,
  HomeServicesPreview,
  HomeTestimonialsPreview,
} from '../components/sections/HomeSections';
import ArchedImageRow from '../components/ui/ArchedImageRow';
import EnquiryForm from '../components/ui/EnquiryForm';
import SectionHeading from '../components/ui/SectionHeading';
import { heroImages, seo } from '../data/content';

export default function Home() {
  return (
    <>
      <PageMeta {...seo.home} path="/" />
      <Hero />
      <section className="hero-gallery" aria-label="Event styling highlights">
        <div className="container">
          <ArchedImageRow images={heroImages} priorityFirst className="arched-row--hero" />
        </div>
      </section>
      <HomeAboutPreview />
      <HomeServicesPreview />
      <HomeEventsCovered />
      <HomeRentalsPreview />
      <HomeTestimonialsPreview />
      <section className="home-enquiry" aria-labelledby="home-enquiry-heading">
        <div className="container">
          <SectionHeading
            title="Start Your Enquiry"
            description="Share your date, guest count, and vision — we respond within one business day."
          />
          <div className="glass home-enquiry__panel">
            <EnquiryForm id="home-enquiry-form" />
          </div>
        </div>
      </section>
    </>
  );
}
