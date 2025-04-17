import { Movie } from '../types';

export const getMovieById = async (id: number): Promise<Movie | null> => {
  try {
    const response = await fetch(`/api/movies/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie:', error);
    return null;
  }
}; 