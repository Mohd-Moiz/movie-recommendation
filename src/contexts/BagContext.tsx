import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Movie } from '../types/movie';

interface Bag {
  watchlist: Movie[];
  favorites: Movie[];
  watched: Movie[];
}

interface BagContextType {
  bag: Bag;
  addToWatchlist: (movie: Movie) => void;
  addToFavorites: (movie: Movie) => void;
  addToWatched: (movie: Movie) => void;
  removeFromWatchlist: (movieId: number) => void;
  removeFromFavorites: (movieId: number) => void;
  removeFromWatched: (movieId: number) => void;
}

const BagContext = createContext<BagContextType | undefined>(undefined);

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

export const BagProvider = ({ children }: BagProviderProps) => {
  const [bag, setBag] = useState<Bag>({
    watchlist: [],
    favorites: [],
    watched: []
  });

  const addToWatchlist = (movie: Movie) => {
    setBag(prev => ({
      ...prev,
      watchlist: [...prev.watchlist, movie]
    }));
  };

  const addToFavorites = (movie: Movie) => {
    setBag(prev => ({
      ...prev,
      favorites: [...prev.favorites, movie]
    }));
  };

  const addToWatched = (movie: Movie) => {
    setBag(prev => ({
      ...prev,
      watched: [...prev.watched, movie]
    }));
  };

  const removeFromWatchlist = (movieId: number) => {
    setBag(prev => ({
      ...prev,
      watchlist: prev.watchlist.filter(movie => movie.id !== movieId)
    }));
  };

  const removeFromFavorites = (movieId: number) => {
    setBag(prev => ({
      ...prev,
      favorites: prev.favorites.filter(movie => movie.id !== movieId)
    }));
  };

  const removeFromWatched = (movieId: number) => {
    setBag(prev => ({
      ...prev,
      watched: prev.watched.filter(movie => movie.id !== movieId)
    }));
  };

  const value = {
    bag,
    addToWatchlist,
    addToFavorites,
    addToWatched,
    removeFromWatchlist,
    removeFromFavorites,
    removeFromWatched
  };

  return (
    <BagContext.Provider value={value}>
      {children}
    </BagContext.Provider>
  );
}; 