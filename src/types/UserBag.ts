import { Movie } from './index';

export interface UserBag {
  watchlist: Movie[];
  favorites: Movie[];
  watched: Movie[];
}

export type BagAction =
  | { type: 'ADD_TO_WATCHLIST'; payload: Movie }
  | { type: 'REMOVE_FROM_WATCHLIST'; payload: Movie }
  | { type: 'ADD_TO_FAVORITES'; payload: Movie }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: Movie }
  | { type: 'ADD_TO_WATCHED'; payload: Movie }
  | { type: 'REMOVE_FROM_WATCHED'; payload: Movie }; 