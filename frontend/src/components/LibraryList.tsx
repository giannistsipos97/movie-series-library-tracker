import { LibraryItem } from './LibraryItem';
import type { LibraryItem as LibraryItemType, LibraryStatus } from '../types/library';

type LibraryListProps = {
  items: LibraryItemType[];
  onStatusChange: (itemId: number, status: LibraryStatus) => void;
  onFavoriteToggle: (itemId: number) => void;
  onDelete: (itemId: number) => void;
  onRatingChange: (itemId: number, rating: number) => void;
};

export function LibraryList({
  items,
  onStatusChange,
  onFavoriteToggle,
  onDelete,
  onRatingChange,
}: LibraryListProps) {
  if (items.length === 0) {
    return <p className="empty-state">No titles found.</p>;
  }
  return (
    <div className="library-list">
      {items.map((item) => (
        <LibraryItem
          item={item}
          key={item.id}
          onStatusChange={onStatusChange}
          onFavoriteToggle={onFavoriteToggle}
          onDelete={onDelete}
          onRatingChange={onRatingChange}
        />
      ))}
    </div>
  );
}
