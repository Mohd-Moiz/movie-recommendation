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
  streamingUrl: string; // Full movie streaming URL
  duration: string; // Movie duration in minutes
  ageRating: string; // PG-13, R, etc.
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

export interface Review {
  userId: string;
  rating: number;
  comment: string;
  timestamp: string;
} 