import { LibraryItem } from './LibraryItem';
import type { LibraryItem as LibraryItemType, LibraryStatus } from '../types/library';

type LibraryListProps = {
  items: LibraryItemType[];
  onStatusChange: (itemId: number, status: LibraryStatus) => void;
};

export function LibraryList({ items, onStatusChange }: LibraryListProps) {
  return (
    <div className="library-list">
      {items.map((item) => (
        <LibraryItem item={item} key={item.id} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
}
