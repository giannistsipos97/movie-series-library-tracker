import { Search } from "lucide-react";

export function LibraryToolbar() {
  return (
    <div className="toolbar">
      <div className="search-box">
        <Search size={18} />
        <input type="search" placeholder="Search titles" aria-label="Search titles" />
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
