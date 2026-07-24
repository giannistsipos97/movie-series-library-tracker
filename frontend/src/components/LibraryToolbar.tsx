import { Heart, Search } from 'lucide-react';
import { LibraryTypeFilter } from '../types/library';

type LibraryToolbarProps = {
  searchQuery: string; //@Input
  onSearchQueryChange: (value: string) => void; //@Output
  selectedTypeFilter: LibraryTypeFilter;
  onTypeFilterChange: (filter: LibraryTypeFilter) => void;
  showFavoritesOnly: boolean;
  onShowFavoritesOnlyChange: (value: boolean) => void;
};

export function LibraryToolbar({
  searchQuery,
  onSearchQueryChange,
  selectedTypeFilter,
  onTypeFilterChange,
  showFavoritesOnly,
  onShowFavoritesOnlyChange,
}: LibraryToolbarProps) {
  return (
    <div className="toolbar">
      <div className="search-box">
        <Search size={18} />
        <input
          type="search"
          placeholder="Search titles"
          aria-label="Search titles"
          value={searchQuery} // Αυτο ειναι που πληκτρολογουμε και στελνουμε απο τον πατερα στο παιδι. Ειναι σαν να εχουμε @Input στην angular
          onChange={(event) => onSearchQueryChange(event.target.value)} //επιστρεφει το αποτελεσμα δηλαδη το event πισω στον πατερα. Ειναι σαν να εχουμε EventEmitter
        />
      </div>
      <button
        type="button"
        className={`favorite-filter ${showFavoritesOnly ? 'active' : ''}`}
        onClick={() => onShowFavoritesOnlyChange(!showFavoritesOnly)}
        aria-pressed={showFavoritesOnly}
      >
        <Heart size={16} fill={showFavoritesOnly ? 'currentColor' : 'none'} aria-hidden="true" />
        Favorites
      </button>
      <div className="segmented-control" aria-label="Filter library">
        <button
          type="button"
          className={selectedTypeFilter === 'All' ? 'active' : ''}
          onClick={() => onTypeFilterChange('All')}
        >
          All
        </button>
        <button
          type="button"
          className={selectedTypeFilter === 'Movie' ? 'active' : ''}
          onClick={() => onTypeFilterChange('Movie')}
        >
          Movies
        </button>
        <button
          type="button"
          className={selectedTypeFilter === 'Series' ? 'active' : ''}
          onClick={() => onTypeFilterChange('Series')}
        >
          Series
        </button>
      </div>
    </div>
  );
}
