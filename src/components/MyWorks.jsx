// Filterable project grid; internal nav filters by type (see filterTypes).
import { useMemo, useState } from 'react';
import GalleryItem from './GalleryItem';

const works = [
  {
    id: '1',
    title: 'Atlas CRM',
    type: 'full-stack',
    blurb: 'Customer workspace with role-based views.',
    tech: ['React', 'Node', 'PostgreSQL'],
  },
  {
    id: '2',
    title: 'Neon Reader',
    type: 'frontend',
    blurb: 'Document viewer with offline cache.',
    tech: ['React', 'Vite', 'Workbox'],
  },
  {
    id: '3',
    title: 'Vault UI',
    type: 'design',
    blurb: 'Component library and layout kit for a product suite.',
    tech: ['Figma', 'CSS', 'Tokens'],
  },
  {
    id: '4',
    title: 'Signal API',
    type: 'full-stack',
    blurb: 'Event-driven messaging service.',
    tech: ['Node', 'Redis', 'Docker'],
  },
];

const filterTypes = [
  { id: 'all', label: 'All' },
  { id: 'full-stack', label: 'Full-stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'design', label: 'Web design' },
];

const MyWorks = () => {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(() => {
    if (filter === 'all') return works;
    return works.filter((w) => w.type === filter);
  }, [filter]);

  return (
    <section className="my-works" id="works" aria-labelledby="works-heading">
      <h2 id="works-heading" className="my-works__title">
        My works
      </h2>
      <nav className="my-works__filters" aria-label="Filter projects by type">
        <ul className="my-works__filter-list">
          {filterTypes.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                className={`my-works__filter${filter === f.id ? ' my-works__filter--active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="my-works-grid">
        {visible.map((item) => (
          <GalleryItem key={item.id} work={item} />
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
