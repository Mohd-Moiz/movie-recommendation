import React, { createContext, useContext, useState } from 'react';
import { Movie } from '../types/Movie';

interface WatchlistContextType {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (movieId: number) => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  const updateLocal = (list: Movie[]) => {
    setWatchlist(list);
    localStorage.setItem('watchlist', JSON.stringify(list));
  };

  const addToWatchlist = (movie: Movie) => {
    if (watchlist.some(m => m.id === movie.id)) return;
    updateLocal([...watchlist, movie]);
  };

  const removeFromWatchlist = (movieId: number) => {
    updateLocal(watchlist.filter(m => m.id !== movieId));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};