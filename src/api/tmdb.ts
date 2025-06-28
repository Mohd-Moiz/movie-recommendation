import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

if (!apiKey) {
  throw new Error('REACT_APP_TMDB_API_KEY is not defined');
}

export interface TmdbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  genre_ids: number[];
}

interface TmdbResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export const fetchPopularMovies = async (page: number = 1): Promise<TmdbMovie[]> => {
  const url = `${baseUrl}/movie/popular`;
  const response = await axios.get<TmdbResponse<TmdbMovie>>(url, {
    params: { api_key: apiKey, page },
  });
  return response.data.results;
};

export const searchMovies = async (query: string, page: number = 1): Promise<TmdbMovie[]> => {
  const url = `${baseUrl}/search/movie`;
  const response = await axios.get<TmdbResponse<TmdbMovie>>(url, {
    params: { api_key: apiKey, query, page },
  });
  return response.data.results;
};

export interface TmdbVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

interface TmdbVideoResponse {
  id: number;
  results: TmdbVideo[];
}

export const fetchMovieVideos = async (movieId: number): Promise<TmdbVideo[]> => {
  const url = `${baseUrl}/movie/${movieId}/videos`;
  const response = await axios.get<TmdbVideoResponse>(url, {
    params: { api_key: apiKey },
  });
  return response.data.results;
};

export interface TmdbMovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  revenue: number;
  runtime: number;
  release_date: string;
  genres: { id: number; name: string }[];
  spoken_languages: { iso_639_1: string; name: string }[];
  tagline: string;
}

export const fetchMovieDetails = async (movieId: number): Promise<TmdbMovieDetails> => {
  const url = `${baseUrl}/movie/${movieId}`;
  const response = await axios.get<TmdbMovieDetails>(url, {
    params: { api_key: apiKey },
  });
  return response.data;
};

// New: fetch available genres and discover movies by preferences
export interface Genre { id: number; name: string; }

export const fetchGenres = async (): Promise<Genre[]> => {
  const url = `${baseUrl}/genre/movie/list`;
  const response = await axios.get<{ genres: Genre[] }>(url, {
    params: { api_key: apiKey },
  });
  return response.data.genres;
};

export const discoverMovies = async (
  genres: number[],
  page: number = 1,
  minRating: number = 0
): Promise<TmdbMovie[]> => {
  const url = `${baseUrl}/discover/movie`;
  const params: any = {
    api_key: apiKey,
    page,
    with_genres: genres.join(','),
    sort_by: 'popularity.desc',
  };
  if (minRating > 0) params['vote_average.gte'] = minRating;
  const response = await axios.get<TmdbResponse<TmdbMovie>>(url, { params });
  return response.data.results;
};

// New: Person search and advanced discovery functions
export interface TmdbPerson { id: number; name: string; }

export const searchPerson = async (query: string): Promise<TmdbPerson[]> => {
  const url = `${baseUrl}/search/person`;
  const response = await axios.get<{ results: TmdbPerson[] }>(url, {
    params: { api_key: apiKey, query },
  });
  return response.data.results;
};

export const discoverAdvancedMovies = async (
  options: {
    genreIds?: number[];
    actorIds?: number[];
    directorIds?: number[];
    year?: number;
    sortBy?: string;
    page?: number;
    minRating?: number;
  }
): Promise<TmdbMovie[]> => {
  const url = `${baseUrl}/discover/movie`;
  const params: any = { api_key: apiKey, page: options.page || 1 };
  if (options.genreIds?.length) params.with_genres = options.genreIds.join(',');
  if (options.actorIds?.length) params.with_cast = options.actorIds.join(',');
  if (options.directorIds?.length) params.with_crew = options.directorIds.join(',');
  if (options.year) params.primary_release_year = options.year;
  if (options.minRating) params['vote_average.gte'] = options.minRating;
  params.sort_by = options.sortBy || 'popularity.desc';
  const response = await axios.get<TmdbResponse<TmdbMovie>>(url, { params });
  return response.data.results;
};