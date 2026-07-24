import { Film, Tv, Play, Heart, BookmarkPlus, CircleCheck, Trash2, Star } from 'lucide-react';
import type { LibraryItem as LibraryItemType, LibraryStatus } from '../types/library';
import { RatingDialog } from './RatingDialog';
import { useState } from 'react';

//τα props ειναι τα αντιστοιχα @Input στην angular, ειναι τα δεδομενα που περναμε απο το parent component στο child component.
type LibraryItemProps = {
  item: LibraryItemType;
  onStatusChange: (itemId: number, status: LibraryStatus) => void;
  onFavoriteToggle: (itemId: number) => void;
  onDelete: (itemId: number) => void;
  onRatingChange: (itemId: number, rating: number) => void;
};

//το item εσω ειναι αντιστοιχο @Input στην angular, ειναι το αντικειμενο που περναμε απο το parent component στο child component.
export function LibraryItem({
  item,
  onStatusChange,
  onFavoriteToggle,
  onDelete,
  onRatingChange,
}: LibraryItemProps) {
  const [isRatingDialogOpen, setIsRatingDialogOpen] = useState(false);

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
        <button
          type="button"
          className={`rating-button ${item.rating > 0 ? 'is-rated' : ''}`}
          onClick={() => setIsRatingDialogOpen(true)}
          aria-label={`Rate ${item.title}`}
        >
          <Star size={16} fill={item.rating > 0 ? 'currentColor' : 'none'} aria-hidden="true" />
          {item.rating > 0 ? `${item.rating}` : 'Not rated'}
        </button>
        <button
          type="button"
          className={item.status === 'To watch' ? 'active' : ''}
          aria-label={'Mark as to watch'}
          onClick={() => onStatusChange(item.id, 'To watch')}
        >
          <BookmarkPlus size={16} aria-hidden="true" />
          {/* To watch */}
        </button>
        <button
          type="button"
          className={item.status === 'Watching' ? 'active' : ''}
          aria-label={'Mark as watching'}
          onClick={() => onStatusChange(item.id, 'Watching')}
        >
          <Play size={16} aria-hidden="true" />
          {/* Watching */}
        </button>
        <button
          type="button"
          className={item.status === 'Completed' ? 'active' : ''}
          aria-label={'Mark as completed'}
          onClick={() => onStatusChange(item.id, 'Completed')}
        >
          <CircleCheck size={16} aria-hidden="true" />
          {/* Completed */}
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
        <button
          type="button"
          className="delete-button"
          aria-label={`Delete ${item.title}`}
          title="Delete title"
          onClick={() => onDelete(item.id)}
        >
          <Trash2 size={18} aria-hidden="true" />
        </button>
      </div>
      {isRatingDialogOpen && (
        <RatingDialog
          title={item.title}
          currentRating={item.rating}
          onSave={(rating) => {
            onRatingChange(item.id, rating);
            setIsRatingDialogOpen(false);
          }}
          onClose={() => setIsRatingDialogOpen(false)}
        />
      )}
    </article>
  );
}
