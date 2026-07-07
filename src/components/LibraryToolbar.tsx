import { Search } from 'lucide-react';

type LibraryToolbarProps = {
  searchQuery: string; //@Input
  onSearchQueryChange: (value: string) => void; //@Output
};

export function LibraryToolbar({ searchQuery, onSearchQueryChange }: LibraryToolbarProps) {
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
        <button type="button" className="active">
          All
        </button>
        <button type="button">Movies</button>
        <button type="button">Series</button>
      </div>
    </div>
  );
}
