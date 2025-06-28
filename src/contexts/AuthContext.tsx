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
  isFirebaseAvailable: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isFirebaseAvailable, setIsFirebaseAvailable] = useState(false);
  
  // Check if Firebase is properly configured
  useEffect(() => {
    const checkFirebaseAvailability = () => {
      try {
        // Try to access Firebase auth methods to check if they're properly initialized
        if (auth && typeof auth.onAuthStateChanged === 'function') {
          setIsFirebaseAvailable(true);
        } else {
          setIsFirebaseAvailable(false);
          console.warn('Firebase authentication is not available');
        }
      } catch (error) {
        setIsFirebaseAvailable(false);
        console.warn('Firebase authentication is not available:', error);
      }
    };
    
    checkFirebaseAvailability();
  }, []);
  
  // Sync Firebase auth state
  useEffect(() => {
    if (!isFirebaseAvailable) {
      console.log('Firebase not available, skipping auth state sync');
      return;
    }
    
    try {
      const unsubscribe = onAuthStateChanged(auth, async (fbUser: FirebaseUser | null) => {
        if (fbUser) {
          try {
            // Load or initialize profile in Firestore
            const userRef = doc(db, 'users', fbUser.uid);
            const snap = await getDoc(userRef);
            if (!snap.exists()) {
              await setDoc(userRef, { name: fbUser.displayName || '', email: fbUser.email || '', createdAt: new Date() });
            }
            setUser({ id: fbUser.uid, email: fbUser.email || '', name: fbUser.displayName || '' });
          } catch (error) {
            console.error('Error handling user profile:', error);
            // Still set user even if Firestore fails
            setUser({ id: fbUser.uid, email: fbUser.email || '', name: fbUser.displayName || '' });
          }
        } else {
          setUser(null);
        }
      });
      return unsubscribe;
    } catch (error) {
      console.error('Error setting up auth state listener:', error);
    }
  }, [isFirebaseAvailable]);

  const login = async (email: string, password: string) => {
    if (!isFirebaseAvailable) {
      throw new Error('Firebase authentication is not available. Please configure Firebase environment variables.');
    }
    await signInWithEmailAndPassword(auth, email, password);
  };

  const register = async (name: string, email: string, password: string) => {
    if (!isFirebaseAvailable) {
      throw new Error('Firebase authentication is not available. Please configure Firebase environment variables.');
    }
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    // Set display name and profile in Firestore
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
      const userRef = doc(db, 'users', cred.user.uid);
      await setDoc(userRef, { name, email, createdAt: new Date() });
    }
  };

  const logout = async () => {
    if (!isFirebaseAvailable) {
      throw new Error('Firebase authentication is not available. Please configure Firebase environment variables.');
    }
    await signOut(auth);
  };
  
  const signInWithGoogle = async () => {
    if (!isFirebaseAvailable || !googleProvider) {
      throw new Error('Google authentication is not available. Please configure Firebase environment variables.');
    }
    await signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebook = async () => {
    if (!isFirebaseAvailable || !facebookProvider) {
      throw new Error('Facebook authentication is not available. Please configure Firebase environment variables.');
    }
    await signInWithPopup(auth, facebookProvider);
  };

  const signInWithMicrosoft = async () => {
    if (!isFirebaseAvailable || !microsoftProvider) {
      throw new Error('Microsoft authentication is not available. Please configure Firebase environment variables.');
    }
    await signInWithPopup(auth, microsoftProvider);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      signInWithGoogle, 
      signInWithFacebook, 
      signInWithMicrosoft,
      isFirebaseAvailable 
    }}>
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