export interface UserProfile {
  id: string;
  username: string;
  email: string;
  watchlist: number[];
  favorites: number[];
  watchHistory: number[];
  reviews: UserReview[];
  preferences: {
    favoriteGenres: string[];
    favoriteActors: string[];
  };
}

export interface UserReview {
  id: string;
  userId: string;
  userName: string;
  createdAt: string;
  movieId: number;
  rating: number;
  comment: string;
  timestamp: string;
  likes: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  movieId: number;
  rating: number;
  comment: string;
  timestamp: string;
  createdAt: string;
  likes: number;
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  popularity: number;
  price: number;
  genres: string[];
  industry: string;
  releaseDate: string;
  trailerUrl: string;
  reviews: Review[];
  tags: string[];
  insights: {
    boxOffice: string;
    awards: string[];
    trivia: string[];
    cast: { name: string; role: string; imageUrl?: string; }[];
    crew: { name: string; role: string; imageUrl?: string; }[];
  };
}

export interface AdminUser extends UserProfile {
  role: 'admin';
  permissions: string[];
}
