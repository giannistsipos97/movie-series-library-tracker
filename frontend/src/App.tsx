import { Plus } from 'lucide-react';
import { libraryItems } from './data/libraryItems';
import { LibraryList } from './components/LibraryList';
import { StatsSummary } from './components/StatsSummary';
import { LibraryToolbar } from './components/LibraryToolbar';
import { useState } from 'react';
import { LibraryTypeFilter, LibraryStatus } from './types/library';
import { AddTitleDialog } from './components/AddTitleDialog';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<LibraryTypeFilter>('All');
  const [items, setItems] = useState(libraryItems);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

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

  const handleAddItem = (title: string, type: 'Movie' | 'Series') => {
    setItems((currentItems) => [
      ...currentItems,
      {
        id: Date.now(),
        title,
        type,
        status: 'To watch',
        rating: 0,
        isFavorite: false,
      },
    ]);

    setIsAddFormOpen(false);
  };

  const handleDeleteItem = (itemId: number) => {
    const itemToDelete = items.find((item) => item.id === itemId);

    if (!itemToDelete) {
      return;
    }

    const shouldDelete = window.confirm(`Are you sure you want to delete "${itemToDelete.title}"?`);

    if (!shouldDelete) {
      return;
    }

    setItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const handleRatingChange = (itemId: number, rating: number) => {
    setItems((currentItems) =>
      currentItems.map((item) => (item.id === itemId ? { ...item, rating } : item))
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
        <button
          className="primary-action"
          type="button"
          onClick={() => setIsAddFormOpen(!isAddFormOpen)}
        >
          <Plus size={18} />
          {isAddFormOpen ? 'Close' : 'Add title'}
        </button>
      </section>

      {isAddFormOpen && (
        <AddTitleDialog onAdd={handleAddItem} onClose={() => setIsAddFormOpen(false)} />
      )}

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
          onDelete={handleDeleteItem}
          onRatingChange={handleRatingChange}
        />
      </section>
    </main>
  );
}
