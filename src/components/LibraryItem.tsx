import { Film, Tv, Play, Heart, BookmarkPlus, CircleCheck } from 'lucide-react';
import type { LibraryItem as LibraryItemType, LibraryStatus } from '../types/library';

//τα props ειναι τα αντιστοιχα @Input στην angular, ειναι τα δεδομενα που περναμε απο το parent component στο child component.
type LibraryItemProps = {
  item: LibraryItemType;
  onStatusChange: (itemId: number, status: LibraryStatus) => void;
  onFavoriteToggle: (itemId: number) => void;
};

//το item εσω ειναι αντιστοιχο @Input στην angular, ειναι το αντικειμενο που περναμε απο το parent component στο child component.
export function LibraryItem({ item, onStatusChange, onFavoriteToggle }: LibraryItemProps) {
  return (
    <article className="library-item">
      <div className="poster-mark" aria-hidden="true">
        {item.type === 'Movie' ? <Film size={22} /> : <Tv size={22} />}
      </div>
      <div>
        <h2>{item.title}</h2>
        <p>
          {item.type} - {item.status}
        </p>
      </div>
      <div className="item-actions">
        <span className="rating">{item.rating ? `${item.rating}/10` : 'Not rated'}</span>
        <button
          type="button"
          className={item.status === 'To watch' ? 'active' : ''}
          onClick={() => onStatusChange(item.id, 'To watch')}
        >
          <BookmarkPlus size={16} aria-hidden="true" />
          To watch
        </button>
        <button
          type="button"
          className={item.status === 'Watching' ? 'active' : ''}
          onClick={() => onStatusChange(item.id, 'Watching')}
        >
          <Play size={16} aria-hidden="true" />
          Watching
        </button>
        <button
          type="button"
          className={item.status === 'Completed' ? 'active' : ''}
          onClick={() => onStatusChange(item.id, 'Completed')}
        >
          <CircleCheck size={16} aria-hidden="true" />
          Completed
        </button>
        <button
          type="button"
          className={`favorite-button ${item.isFavorite ? 'is-favorite' : ''}`}
          onClick={() => onFavoriteToggle(item.id)}
          aria-label={item.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          title={item.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={18} fill={item.isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
    </article>
  );
}
