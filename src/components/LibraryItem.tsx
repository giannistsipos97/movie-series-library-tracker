import { Film, Tv } from "lucide-react";
import type { LibraryItem as LibraryItemType } from "../types/library";

//τα props ειναι τα αντιστοιχα @Input στην angular, ειναι τα δεδομενα που περναμε απο το parent component στο child component.
type LibraryItemProps = {
  item: LibraryItemType;
};

//το item εσω ειναι αντιστοιχο @Input στην angular, ειναι το αντικειμενο που περναμε απο το parent component στο child component.
export function LibraryItem({ item }: LibraryItemProps) {
  return (
    <article className="library-item">
      <div className="poster-mark" aria-hidden="true">
        {item.type === "Movie" ? <Film size={22} /> : <Tv size={22} />}
      </div>
      <div>
        <h2>{item.title}</h2>
        <p>
          {item.type} - {item.status}
        </p>
      </div>
      <span className="rating">{item.rating ? `${item.rating}/10` : "Not rated"}</span>
    </article>
  );
}
