import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, Movie } from '../types';

interface UserContextType {
  user: UserProfile | null;
  watchlist: Movie[];
  favorites: Movie[];
  addToWatchlist: (movieId: number) => void;
  removeFromWatchlist: (movieId: number) => void;
  addToFavorites: (movieId: number) => void;
  removeFromFavorites: (movieId: number) => void;
  updatePreferences: (preferences: UserProfile['preferences']) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    // Load user data from localStorage or API
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const addToWatchlist = (movieId: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        watchlist: [...user.watchlist, movieId]
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const removeFromWatchlist = (movieId: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        watchlist: user.watchlist.filter(id => id !== movieId)
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const addToFavorites = (movieId: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        favorites: [...user.favorites, movieId]
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const removeFromFavorites = (movieId: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        favorites: user.favorites.filter(id => id !== movieId)
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const updatePreferences = (preferences: UserProfile['preferences']) => {
    if (user) {
      const updatedUser = {
        ...user,
        preferences
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        watchlist,
        favorites,
        addToWatchlist,
        removeFromWatchlist,
        addToFavorites,
        removeFromFavorites,
        updatePreferences
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
