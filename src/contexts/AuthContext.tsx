// @ts-nocheck
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider, facebookProvider, microsoftProvider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signInWithMicrosoft: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Sync Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser: FirebaseUser | null) => {
      if (fbUser) {
        // Load or initialize profile in Firestore
        const userRef = doc(db, 'users', fbUser.uid);
        const snap = await getDoc(userRef);
        if (!snap.exists()) {
          await setDoc(userRef, { name: fbUser.displayName || '', email: fbUser.email || '', createdAt: new Date() });
        }
        setUser({ id: fbUser.uid, email: fbUser.email || '', name: fbUser.displayName || '' });
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const register = async (name: string, email: string, password: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    // Set display name and profile in Firestore
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
      const userRef = doc(db, 'users', cred.user.uid);
      await setDoc(userRef, { name, email, createdAt: new Date() });
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebook = async () => {
    await signInWithPopup(auth, facebookProvider);
  };

  const signInWithMicrosoft = async () => {
    await signInWithPopup(auth, microsoftProvider);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, signInWithGoogle, signInWithFacebook, signInWithMicrosoft }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 