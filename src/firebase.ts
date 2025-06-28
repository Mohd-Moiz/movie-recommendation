// @ts-nocheck
// Initialize Firebase app and services
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Check if Firebase environment variables are available
const isFirebaseConfigured = process.env.REACT_APP_FIREBASE_API_KEY && 
                            process.env.REACT_APP_FIREBASE_AUTH_DOMAIN &&
                            process.env.REACT_APP_FIREBASE_PROJECT_ID;

// Fallback Firebase config for development (these are dummy values)
const fallbackConfig = {
  apiKey: "dummy-api-key",
  authDomain: "dummy-project.firebaseapp.com",
  projectId: "dummy-project",
  storageBucket: "dummy-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
  measurementId: "G-XXXXXXXXXX"
};

const firebaseConfig = isFirebaseConfigured ? {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
} : fallbackConfig;

// Debug log to verify environment variables
if (!isFirebaseConfigured) {
  console.warn('Firebase environment variables not found. Using fallback configuration. Authentication features will be disabled.');
} else {
  console.log('Firebase configured successfully');
}

let app;
let auth: any;
let db: any;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.error('Failed to initialize Firebase:', error);
  // Create mock auth and db objects for fallback
  auth = {
    currentUser: null,
    onAuthStateChanged: (callback: any) => {
      callback(null);
      return () => {};
    },
    signInWithEmailAndPassword: async () => {
      throw new Error('Firebase not configured. Please set up Firebase environment variables.');
    },
    createUserWithEmailAndPassword: async () => {
      throw new Error('Firebase not configured. Please set up Firebase environment variables.');
    },
    signInWithPopup: async () => {
      throw new Error('Firebase not configured. Please set up Firebase environment variables.');
    },
    signOut: async () => {
      throw new Error('Firebase not configured. Please set up Firebase environment variables.');
    },
    updateProfile: async () => {
      throw new Error('Firebase not configured. Please set up Firebase environment variables.');
    }
  };
  db = {
    collection: () => ({
      doc: () => ({
        set: async () => {
          throw new Error('Firebase not configured. Please set up Firebase environment variables.');
        },
        get: async () => ({
          exists: () => false,
          data: () => null
        })
      })
    })
  };
}

export { auth, db };

// OAuth providers (only create if Firebase is properly configured)
export const googleProvider = isFirebaseConfigured ? new GoogleAuthProvider() : null;
export const facebookProvider = isFirebaseConfigured ? new FacebookAuthProvider() : null;
export const microsoftProvider = isFirebaseConfigured ? new OAuthProvider('microsoft.com') : null; 