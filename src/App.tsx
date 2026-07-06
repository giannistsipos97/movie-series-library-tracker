import { Film, Plus, Search, Tv } from 'lucide-react';

type LibraryItem = {
  id: number;
  title: string;
  type: 'Movie' | 'Series';
  status: 'To watch' | 'Watching' | 'Completed';
  rating: number;
};

const libraryItems: LibraryItem[] = [
  {
    id: 1,
    title: 'Dune: Part Two',
    type: 'Movie',
    status: 'Completed',
    rating: 9,
  },
  {
    id: 2,
    title: 'Shogun',
    type: 'Series',
    status: 'Watching',
    rating: 8,
  },
  {
    id: 3,
    title: 'The Bear',
    type: 'Series',
    status: 'To watch',
    rating: 0,
  },
];

export function App() {
  const completedCount = libraryItems.filter((item) => item.status === 'Completed').length;
  const watchlistCount = libraryItems.filter((item) => item.status === 'To watch').length;

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Library Tracker MVP</p>
          <h1>Movie & Series Library</h1>
          <p className="hero-copy">
            Track what you want to watch, what you are currently watching, and what deserves a rewatch.
          </p>
        </div>
        <button className="primary-action" type="button">
          <Plus size={18} />
          Add title
        </button>
      </section>

      <section className="stats-grid" aria-label="Library summary">
        <article>
          <span>Total titles</span>
          <strong>{libraryItems.length}</strong>
        </article>
        <article>
          <span>Completed</span>
          <strong>{completedCount}</strong>
        </article>
        <article>
          <span>Watchlist</span>
          <strong>{watchlistCount}</strong>
        </article>
      </section>

      <section className="library-panel">
        <div className="toolbar">
          <div className="search-box">
            <Search size={18} />
            <input type="search" placeholder="Search titles" aria-label="Search titles" />
          </div>
          <div className="segmented-control" aria-label="Filter library">
            <button type="button" className="active">All</button>
            <button type="button">Movies</button>
            <button type="button">Series</button>
          </div>
        </div>

        <div className="library-list">
          {libraryItems.map((item) => (
            <article className="library-item" key={item.id}>
              <div className="poster-mark" aria-hidden="true">
                {item.type === 'Movie' ? <Film size={22} /> : <Tv size={22} />}
              </div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.type} · {item.status}</p>
              </div>
              <span className="rating">{item.rating ? `${item.rating}/10` : 'Not rated'}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
