import { Plus } from 'lucide-react';
import { libraryItems } from './data/libraryItems';
import { LibraryList } from './components/LibraryList';
import { StatsSummary } from './components/StatsSummary';
import { LibraryToolbar } from './components/LibraryToolbar';
import { useState } from 'react';
import { LibraryTypeFilter } from './types/library';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<LibraryTypeFilter>('All');

  const completedCount = libraryItems.filter((item) => item.status === 'Completed').length;
  const watchlistCount = libraryItems.filter((item) => item.status === 'To watch').length;

  const filteredItems = libraryItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === 'All' || item.type === typeFilter;

    return matchesSearch && matchesType;
  });

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Library Tracker MVP</p>
          <h1>Movie & Series Library</h1>
          <p className="hero-copy">
            Track what you want to watch, what you are currently watching, and what deserves a
            rewatch.
          </p>
        </div>
        <button className="primary-action" type="button">
          <Plus size={18} />
          Add title
        </button>
      </section>

      <StatsSummary
        totalCount={libraryItems.length}
        completedCount={completedCount}
        watchlistCount={watchlistCount}
      />

      <section className="library-panel">
        <LibraryToolbar
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          selectedTypeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
        />
        <LibraryList items={filteredItems} />
      </section>
    </main>
  );
}
