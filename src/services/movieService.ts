import { Movie } from '../types/movie';

const mockMovies: { [key: number]: Movie } = {
  1: {
    id: 1,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    release_date: "1994-09-23",
    vote_average: 8.7,
    genre_ids: [18, 80]
  },
  2: {
    id: 2,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    release_date: "1972-03-14",
    vote_average: 8.7,
    genre_ids: [18, 80]
  },
  3: {
    id: 3,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: "2008-07-16",
    vote_average: 8.5,
    genre_ids: [18, 28, 80]
  }
};

export const getMovieById = async (id: number): Promise<Movie | null> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockMovies[id] || null;
}; 