import { LibraryItem } from './LibraryItem';
import type { LibraryItem as LibraryItemType, LibraryStatus } from '../types/library';

type LibraryListProps = {
  items: LibraryItemType[];
  onStatusChange: (itemId: number, status: LibraryStatus) => void;
  onFavoriteToggle: (itemId: number) => void;
};

export function LibraryList({ items, onStatusChange, onFavoriteToggle }: LibraryListProps) {
  return (
    <div className="library-list">
      {items.map((item) => (
        <LibraryItem
          item={item}
          key={item.id}
          onStatusChange={onStatusChange}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
}
