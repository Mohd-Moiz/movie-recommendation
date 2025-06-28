// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot, query } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { Movie } from '../types/Movie';

interface WatchedContextType {
  watched: Movie[];
  addToWatched: (movie: Movie) => Promise<void>;
  removeFromWatched: (movieId: number) => Promise<void>;
}

const WatchedContext = createContext<WatchedContextType | undefined>(undefined);

export const WatchedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [watched, setWatched] = useState<Movie[]>([]);

  useEffect(() => {
    if (!user) {
      setWatched([]);
      return;
    }
    const colRef = collection(db, 'users', user.id, 'watched');
    const q = query(colRef);
    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      const movies: Movie[] = [];
      snapshot.forEach((d: any) => movies.push(d.data() as Movie));
      setWatched(movies);
    });
    return unsubscribe;
  }, [user]);

  const addToWatched = async (movie: Movie) => {
    if (!user) return;
    const docRef = doc(db, 'users', user.id, 'watched', movie.id.toString());
    await setDoc(docRef, movie);
  };

  const removeFromWatched = async (movieId: number) => {
    if (!user) return;
    const docRef = doc(db, 'users', user.id, 'watched', movieId.toString());
    await deleteDoc(docRef);
  };

  return (
    <WatchedContext.Provider value={{ watched, addToWatched, removeFromWatched }}>
      {children}
    </WatchedContext.Provider>
  );
};

export const useWatched = () => {
  const context = useContext(WatchedContext);
  if (!context) {
    throw new Error('useWatched must be used within a WatchedProvider');
  }
  return context;
};
