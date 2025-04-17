import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { UserBag, BagAction } from '../types/UserBag';
import { Movie } from '../types/Movie';

const initialState: UserBag = {
  watchlist: [],
  favorites: [],
  watched: []
};

const BagContext = createContext<{
  bag: UserBag;
  dispatch: React.Dispatch<BagAction>;
} | undefined>(undefined);

function bagReducer(state: UserBag, action: BagAction): UserBag {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      };
    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id)
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(movie => movie.id !== action.payload.id)
      };
    case 'ADD_TO_WATCHED':
      return {
        ...state,
        watched: [...state.watched, action.payload]
      };
    case 'REMOVE_FROM_WATCHED':
      return {
        ...state,
        watched: state.watched.filter(movie => movie.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export function BagProvider({ children }: { children: ReactNode }) {
  const [bag, dispatch] = useReducer(bagReducer, initialState);

  return (
    <BagContext.Provider value={{ bag, dispatch }}>
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  const context = useContext(BagContext);
  if (context === undefined) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
} 