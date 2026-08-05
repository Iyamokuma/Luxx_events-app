import PageMeta from '../components/ui/PageMeta';
import PageCta from '../components/ui/PageCta';
import SectionHeading from '../components/ui/SectionHeading';
import { aboutContent, seo } from '../data/content';

export default function About() {
  return (
    <>
      <PageMeta {...seo.about} path="/about" />
      <header className="page-header container">
        <h1>About Us</h1>
        <p>{aboutContent.headline}</p>
      </header>

      <section className="section container">
        <div className="grid-2">
          <div>
            {aboutContent.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="muted" style={{ marginBottom: '1rem' }}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: '1fr' }}>
            {aboutContent.stats.map((stat) => (
              <article key={stat.label} className="card">
                <div className="card__body" style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '2rem', fontWeight: 800 }}>{stat.value}</p>
                  <p className="muted">{stat.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight container">
        <SectionHeading title="Our Values" />
        <div className="grid-3">
          {aboutContent.values.map((value) => (
            <article key={value.title} className="card">
              <div className="card__body">
                <h3>{value.title}</h3>
                <p className="muted">{value.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageCta />
    </>
  );
}
