export type LibraryItem = {
  id: number;
  title: string;
  type: 'Movie' | 'Series';
  status: LibraryStatus;
  rating: number;
  isFavorite: boolean;
};

export type LibraryTypeFilter = 'All' | 'Movie' | 'Series';

export type LibraryStatus = 'To watch' | 'Watching' | 'Completed';
