import { Plus } from 'lucide-react';
import { libraryItems } from './data/libraryItems';
import { LibraryList } from './components/LibraryList';
import { StatsSummary } from './components/StatsSummary';
import { LibraryToolbar } from './components/LibraryToolbar';
import { useState } from 'react';
import { LibraryTypeFilter, LibraryStatus } from './types/library';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<LibraryTypeFilter>('All');
  const [items, setItems] = useState(libraryItems);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const completedCount = items.filter((item) => item.status === 'Completed').length;
  const watchlistCount = items.filter((item) => item.status === 'To watch').length;

  const handleStatusChange = (itemId: number, status: LibraryStatus) => {
    setItems((currentItems) =>
      currentItems.map((item) => (item.id === itemId ? { ...item, status } : item))
    );
  };

  const handleFavoriteToggle = (itemId: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFavorite = !showFavoritesOnly || item.isFavorite;

    const matchesType = typeFilter === 'All' || item.type === typeFilter;

    return matchesSearch && matchesType && matchesFavorite;
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
        totalCount={items.length}
        completedCount={completedCount}
        watchlistCount={watchlistCount}
      />

      <section className="library-panel">
        <LibraryToolbar
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          selectedTypeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
          showFavoritesOnly={showFavoritesOnly}
          onShowFavoritesOnlyChange={setShowFavoritesOnly}
        />
        <LibraryList
          items={filteredItems}
          onStatusChange={handleStatusChange}
          onFavoriteToggle={handleFavoriteToggle}
        />
      </section>
    </main>
  );
}
