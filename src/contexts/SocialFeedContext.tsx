import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { Movie } from '../types/Movie';

interface FeedItem {
  id: string;
  userId: string;
  userName: string;
  movie: Movie;
  timestamp: any;
}

interface SocialFeedContextType {
  feed: FeedItem[];
  addFeedItem: (movie: Movie) => Promise<void>;
}

const SocialFeedContext = createContext<SocialFeedContextType | undefined>(undefined);

export const SocialFeedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [feed, setFeed] = useState<FeedItem[]>([]);

  useEffect(() => {
    const colRef = collection(db, 'publicFeed');
    const q = query(colRef, orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      const items: FeedItem[] = [];
      snapshot.forEach((docSnap: any) => {
        const data = docSnap.data() as any;
        items.push({
          id: docSnap.id,
          userId: data.userId,
          userName: data.userName,
          movie: data.movie,
          timestamp: data.timestamp,
        });
      });
      setFeed(items);
    });
    return unsubscribe;
  }, []);

  const addFeedItem = async (movie: Movie) => {
    if (!user) return;
    await addDoc(collection(db, 'publicFeed'), {
      userId: user.id,
      userName: user.name,
      movie,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <SocialFeedContext.Provider value={{ feed, addFeedItem }}>
      {children}
    </SocialFeedContext.Provider>
  );
};

export const useSocialFeed = () => {
  const context = useContext(SocialFeedContext);
  if (!context) {
    throw new Error('useSocialFeed must be used within a SocialFeedProvider');
  }
  return context;
}; 