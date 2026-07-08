import { Search } from 'lucide-react';
import { LibraryTypeFilter } from '../types/library';

type LibraryToolbarProps = {
  searchQuery: string; //@Input
  onSearchQueryChange: (value: string) => void; //@Output
  selectedTypeFilter: LibraryTypeFilter;
  onTypeFilterChange: (filter: LibraryTypeFilter) => void;
};

export function LibraryToolbar({
  searchQuery,
  onSearchQueryChange,
  selectedTypeFilter,
  onTypeFilterChange,
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
