export type LibraryItem = {
  id: number;
  title: string;
  type: 'Movie' | 'Series';
  status: 'To watch' | 'Watching' | 'Completed';
  rating: number;
};

export type LibraryTypeFilter = 'All' | 'Movie' | 'Series';
