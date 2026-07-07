import { LibraryItem } from "./LibraryItem";
import type { LibraryItem as LibraryItemType } from "../types/library";

type LibraryListProps = {
  items: LibraryItemType[];
};

export function LibraryList({ items }: LibraryListProps) {
  return (
    <div className="library-list">
      {items.map((item) => (
        <LibraryItem item={item} key={item.id} />
      ))}
    </div>
  );
}
