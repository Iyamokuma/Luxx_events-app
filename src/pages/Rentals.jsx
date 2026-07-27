import { useMemo, useState } from 'react';
import PageMeta from '../components/ui/PageMeta';
import SafeImage from '../components/ui/SafeImage';
import { Link } from 'react-router-dom';
import { rentalCategories, rentals, seo } from '../data/content';
import './Rentals.css';

export default function Rentals() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const showCategoryFilters = rentalCategories.length > 2;

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return rentals.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category;
      const matchesQuery =
        !normalized ||
        item.name.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageMeta {...seo.rentals} path="/rentals" />
      <header className="page-header container">
        <h1>Rental Catalogue</h1>
        <p>{rentals.length} hire items available — browse the catalogue and request a quote.</p>
      </header>

      <section className="section container">
        <div className="rentals-toolbar">
          <label className="sr-only" htmlFor="rental-search">
            Search rentals
          </label>
          <input
            id="rental-search"
            type="search"
            placeholder="Search by name, category, or description..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          {showCategoryFilters ? (
            <div className="rentals-filters" role="group" aria-label="Filter by category">
              {rentalCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`rentals-filter${category === item ? ' is-active' : ''}`}
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {filtered.length === 0 ? (
          <p className="muted">No rentals match your search. Try another category or keyword.</p>
        ) : (
          <div className="rentals-grid">
            {filtered.map((item) => (
              <article key={item.id} className="rental-card card">
                <div className="rental-card__media">
                  <SafeImage src={item.image} alt={item.name} />
                </div>
                <div className="card__body">
                  <p className="rental-card__category">{item.category}</p>
                  <h2>{item.name}</h2>
                  <p className="rental-card__price">{item.price}</p>
                  <p className="muted">{item.description}</p>
                  <Link to="/contact" className="btn btn--outline rental-card__cta">
                    Request Quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
