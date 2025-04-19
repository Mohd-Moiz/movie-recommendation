import React, { createContext, useContext, useState } from 'react';
import { Movie } from '../types/movie';

interface Bag {
  watchlist: Movie[];
  favorites: Movie[];
  watched: Movie[];
}

interface BagContextType {
  bag: Bag;
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (movie: Movie) => void;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
  addToWatched: (movie: Movie) => void;
  removeFromWatched: (movie: Movie) => void;
}

const BagContext = createContext<BagContextType | undefined>(undefined);

export const useBag = () => {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
};

export const BagProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bag, setBag] = useState<Bag>({
    watchlist: [],
    favorites: [],
    watched: [],
  });

  const addToWatchlist = (movie: Movie) => {
    setBag((prev) => ({
      ...prev,
      watchlist: [...prev.watchlist, movie],
    }));
  };

  const removeFromWatchlist = (movie: Movie) => {
    setBag((prev) => ({
      ...prev,
      watchlist: prev.watchlist.filter((m) => m.id !== movie.id),
    }));
  };

  const addToFavorites = (movie: Movie) => {
    setBag((prev) => ({
      ...prev,
      favorites: [...prev.favorites, movie],
    }));
  };

  const removeFromFavorites = (movie: Movie) => {
    setBag((prev) => ({
      ...prev,
      favorites: prev.favorites.filter((m) => m.id !== movie.id),
    }));
  };

  const addToWatched = (movie: Movie) => {
    setBag((prev) => ({
      ...prev,
      watched: [...prev.watched, movie],
    }));
  };

  const removeFromWatched = (movie: Movie) => {
    setBag((prev) => ({
      ...prev,
      watched: prev.watched.filter((m) => m.id !== movie.id),
    }));
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
      }}
    >
      {children}
    </BagContext.Provider>
  );
}; 