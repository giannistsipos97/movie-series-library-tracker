import { useEffect, useState } from 'react';

type AddTitleDialogProps = {
  onClose: () => void;
  onAdd: (title: string, type: 'Movie' | 'Series') => void;
};

export function AddTitleDialog({ onAdd, onClose }: AddTitleDialogProps) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState<'Movie' | 'Series'>('Movie');

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
        className="add-title-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-title-heading"
      >
        <h2 id="add-title-heading">New Movie/Series</h2>

        <form
          className="add-title-form"
          onSubmit={(event) => {
            event.preventDefault();

            const trimmedTitle = title.trim();

            if (!trimmedTitle) {
              return;
            }

            onAdd(trimmedTitle, type);
          }}
        >
          <div className="title-field-row">
            <label htmlFor="title">Title</label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              autoFocus
            />
          </div>

          <fieldset>
            <legend>Type</legend>

            <label>
              <input
                type="radio"
                name="type"
                checked={type === 'Movie'}
                onChange={() => setType('Movie')}
              />
              Movie
            </label>

            <label>
              <input
                type="radio"
                name="type"
                checked={type === 'Series'}
                onChange={() => setType('Series')}
              />
              Series
            </label>
          </fieldset>

          <div className="dialog-actions">
            <button type="submit">Add</button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
