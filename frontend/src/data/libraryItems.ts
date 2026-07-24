import { LibraryItem } from '../types/library';

export const libraryItems: LibraryItem[] = [
  {
    id: 1,
    title: 'Dune: Part Two',
    type: 'Movie',
    status: 'Completed',
    rating: 9,
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Shogun',
    type: 'Series',
    status: 'Watching',
    rating: 8,
    isFavorite: false,
  },
  {
    id: 3,
    title: 'The Bear',
    type: 'Series',
    status: 'To watch',
    rating: 0,
    isFavorite: true,
  },
];
