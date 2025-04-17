import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Movie } from '../types';

interface Bag {
  watchlist: number[];
  favorites: number[];
  watched: number[];
}

interface BagContextType {
  bag: Bag;
  addToWatchlist: (movieId: number) => void;
  removeFromWatchlist: (movieId: number) => void;
  addToFavorites: (movieId: number) => void;
  removeFromFavorites: (movieId: number) => void;
  addToWatched: (movieId: number) => void;
  removeFromWatched: (movieId: number) => void;
  dispatch?: (action: { type: string; payload: Movie }) => void;
}

const defaultContext: BagContextType = {
  bag: { watchlist: [], favorites: [], watched: [] },
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  addToWatched: () => {},
  removeFromWatched: () => {},
};

export const BagContext = createContext<BagContextType>(defaultContext);

export const useBag = () => {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
};

interface BagProviderProps {
  children: ReactNode;
}

export const BagProvider: React.FC<BagProviderProps> = ({ children }) => {
  const [bag, setBag] = useState<Bag>({
    watchlist: [],
    favorites: [],
    watched: [],
  });

  const addToWatchlist = (movieId: number) => {
    setBag(prev => ({
      ...prev,
      watchlist: [...prev.watchlist, movieId],
    }));
  };

  const removeFromWatchlist = (movieId: number) => {
    setBag(prev => ({
      ...prev,
      watchlist: prev.watchlist.filter(id => id !== movieId),
    }));
  };

  const addToFavorites = (movieId: number) => {
    setBag(prev => ({
      ...prev,
      favorites: [...prev.favorites, movieId],
    }));
  };

  const removeFromFavorites = (movieId: number) => {
    setBag(prev => ({
      ...prev,
      favorites: prev.favorites.filter(id => id !== movieId),
    }));
  };

  const addToWatched = (movieId: number) => {
    setBag(prev => ({
      ...prev,
      watched: [...prev.watched, movieId],
    }));
  };

  const removeFromWatched = (movieId: number) => {
    setBag(prev => ({
      ...prev,
      watched: prev.watched.filter(id => id !== movieId),
    }));
  };

  const dispatch = (action: { type: string; payload: Movie }) => {
    switch (action.type) {
      case 'ADD_TO_WATCHLIST':
        addToWatchlist(action.payload.id);
        break;
      case 'REMOVE_FROM_WATCHLIST':
        removeFromWatchlist(action.payload.id);
        break;
      case 'ADD_TO_FAVORITES':
        addToFavorites(action.payload.id);
        break;
      case 'REMOVE_FROM_FAVORITES':
        removeFromFavorites(action.payload.id);
        break;
      case 'ADD_TO_WATCHED':
        addToWatched(action.payload.id);
        break;
      case 'REMOVE_FROM_WATCHED':
        removeFromWatched(action.payload.id);
        break;
      default:
        break;
    }
  };

  return (
    <BagContext.Provider
      value={{
        bag,
        addToWatchlist,
        removeFromWatchlist,
        addToFavorites,
        removeFromFavorites,
        addToWatched,
        removeFromWatched,
        dispatch,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}; 