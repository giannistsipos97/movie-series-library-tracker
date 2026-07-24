import { useState, useEffect } from 'react';

type RatingDialogProps = {
  title: string;
  currentRating: number;
  onSave: (rating: number) => void;
  onClose: () => void;
};

const ratingOptions = Array.from({ length: 10 }, (_, index) => index + 1);

export function RatingDialog({ title, currentRating, onSave, onClose }: RatingDialogProps) {
  const [rating, setRating] = useState(currentRating);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="dialog-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="rating-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rating-dialog-heading"
      >
        <h2 id="rating-dialog-heading">Rate {title}</h2>

        <p className="rating-value">{rating === 0 ? 'Not rated' : `${rating}/10`}</p>

        <div className="rating-options" role="group" aria-label={`Choose a rating for ${title}`}>
          {ratingOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={rating === option ? 'active' : ''}
              aria-pressed={rating === option}
              autoFocus={option === (currentRating || 1)}
              onClick={() => setRating(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="dialog-actions">
          <button
            type="button"
            className="primary-dialog-action"
            disabled={rating === 0}
            onClick={() => onSave(rating)}
          >
            Save
          </button>

          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
}
