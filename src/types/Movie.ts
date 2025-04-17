export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
  likes: number;
  movieId?: number;
  timestamp?: string;
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  userRating?: number;
  reviews: Review[];
  popularity: number;
  price: number;
  genres: string[];
  tags: string[];
  industry: string;
  releaseDate: string;
  trailerUrl: string;
  insights: {
    boxOffice: string;
    awards: string[];
    trivia: string[];
    cast: Array<{
      name: string;
      role: string;
      imageUrl?: string;
    }>;
    crew: Array<{
      name: string;
      role: string;
      imageUrl?: string;
    }>;
  };
} 