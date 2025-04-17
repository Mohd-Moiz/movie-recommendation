export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export interface UserBag {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (movieId: number) => void;
  clearBag: () => void;
  isInBag: (movieId: number) => boolean;
} 