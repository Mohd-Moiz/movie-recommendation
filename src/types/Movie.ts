export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  price: number;
  genres: string[];
  industry: string;
  insights: {
    boxOffice: string;
    awards: string[];
    trivia: string[];
    cast: Array<{
      name: string;
      role: string;
    }>;
    crew: Array<{
      name: string;
      role: string;
    }>;
  };
} 