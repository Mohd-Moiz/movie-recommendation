// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot, query } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { Movie } from '../types/Movie';

interface FavoritesContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => Promise<void>;
  removeFromFavorites: (movieId: number) => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }
    const colRef = collection(db, 'users', user.id, 'favorites');
    const q = query(colRef);
    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      const movies: Movie[] = [];
      snapshot.forEach((d: any) => movies.push(d.data() as Movie));
      setFavorites(movies);
    });
    return unsubscribe;
  }, [user]);

  const addToFavorites = async (movie: Movie) => {
    if (!user) return;
    const docRef = doc(db, 'users', user.id, 'favorites', movie.id.toString());
    await setDoc(docRef, movie);
  };

  const removeFromFavorites = async (movieId: number) => {
    if (!user) return;
    const docRef = doc(db, 'users', user.id, 'favorites', movieId.toString());
    await deleteDoc(docRef);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
