import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserPreferences {
  favoriteGenres: number[];
  favoriteMovies: number[];
  ratings: { [movieId: number]: number };
  watchHistory: { movieId: number; timestamp: number }[];
}

interface UserPreferencesContextType {
  preferences: UserPreferences;
  addFavoriteGenre: (genreId: number) => void;
  removeFavoriteGenre: (genreId: number) => void;
  addFavoriteMovie: (movieId: number) => void;
  removeFavoriteMovie: (movieId: number) => void;
  addRating: (movieId: number, rating: number) => void;
  addToWatchHistory: (movieId: number) => void;
}

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const UserPreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    favoriteGenres: [],
    favoriteMovies: [],
    ratings: {},
    watchHistory: []
  });

  const addFavoriteGenre = (genreId: number) => {
    setPreferences(prev => ({
      ...prev,
      favoriteGenres: [...prev.favoriteGenres, genreId]
    }));
  };

  const removeFavoriteGenre = (genreId: number) => {
    setPreferences(prev => ({
      ...prev,
      favoriteGenres: prev.favoriteGenres.filter(id => id !== genreId)
    }));
  };

  const addFavoriteMovie = (movieId: number) => {
    setPreferences(prev => ({
      ...prev,
      favoriteMovies: [...prev.favoriteMovies, movieId]
    }));
  };

  const removeFavoriteMovie = (movieId: number) => {
    setPreferences(prev => ({
      ...prev,
      favoriteMovies: prev.favoriteMovies.filter(id => id !== movieId)
    }));
  };

  const addRating = (movieId: number, rating: number) => {
    setPreferences(prev => ({
      ...prev,
      ratings: { ...prev.ratings, [movieId]: rating }
    }));
  };

  const addToWatchHistory = (movieId: number) => {
    setPreferences(prev => ({
      ...prev,
      watchHistory: [
        { movieId, timestamp: Date.now() },
        ...prev.watchHistory
      ]
    }));
  };

  return (
    <UserPreferencesContext.Provider
      value={{
        preferences,
        addFavoriteGenre,
        removeFavoriteGenre,
        addFavoriteMovie,
        removeFavoriteMovie,
        addRating,
        addToWatchHistory
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
}; 