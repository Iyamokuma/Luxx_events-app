import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="Page Not Found — Luxx Haven Events"
        description="The page you are looking for could not be found."
      />
      <section className="page-header container" style={{ minHeight: '50vh' }}>
        <h1>404</h1>
        <p>The page you requested does not exist.</p>
        <p style={{ marginTop: 'var(--space-md)' }}>
          <Link to="/" className="btn">
            Return Home
          </Link>
        </p>
      </section>
    </>
  );
}
