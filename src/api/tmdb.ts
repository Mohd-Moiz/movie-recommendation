import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

// Check if API key is available
const isApiKeyAvailable = apiKey && apiKey !== 'your_tmdb_api_key_here';

// Fallback movie data when API key is not available
const fallbackMovies: TmdbMovie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: null,
    vote_average: 9.3,
    genre_ids: [18, 80]
  },
  {
    id: 2,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster_path: null,
    vote_average: 9.2,
    genre_ids: [18, 80]
  },
  {
    id: 3,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: null,
    vote_average: 9.0,
    genre_ids: [28, 18, 80]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster_path: null,
    vote_average: 8.9,
    genre_ids: [80, 53]
  },
  {
    id: 5,
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    poster_path: null,
    vote_average: 8.8,
    genre_ids: [18]
  },
  {
    id: 6,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: null,
    vote_average: 8.8,
    genre_ids: [28, 878, 12]
  },
  {
    id: 7,
    title: "The Matrix",
    overview: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
    poster_path: null,
    vote_average: 8.7,
    genre_ids: [28, 878]
  },
  {
    id: 8,
    title: "Goodfellas",
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    poster_path: null,
    vote_average: 8.7,
    genre_ids: [18, 80]
  }
];

// Fallback trailer data for popular movies
const fallbackTrailers: { [movieId: number]: TmdbVideo[] } = {
  1: [{ id: '1', key: 'f_vbAtiSY9Y', name: 'RRR Official Trailer', site: 'YouTube', type: 'Trailer' }],
  2: [{ id: '2', key: 'U2Qp5pL3ovA', name: 'Dune: Part Two Official Trailer', site: 'YouTube', type: 'Trailer' }],
  3: [{ id: '3', key: 'vqu4z34wENw', name: 'Pathaan Official Trailer', site: 'YouTube', type: 'Trailer' }],
  4: [{ id: '4', key: 'YoHD9XEInc0', name: 'Inception Official Trailer', site: 'YouTube', type: 'Trailer' }],
  5: [{ id: '5', key: 'EXeTwQWrcwY', name: 'The Dark Knight Official Trailer', site: 'YouTube', type: 'Trailer' }],
  6: [{ id: '6', key: '2LqzF5WauAw', name: 'Interstellar Official Trailer', site: 'YouTube', type: 'Trailer' }],
  7: [{ id: '7', key: '9GgxinPwAGc', name: 'Jawan Official Trailer', site: 'YouTube', type: 'Trailer' }],
  8: [{ id: '8', key: 'vKQi3bBA1y8', name: 'The Matrix Official Trailer', site: 'YouTube', type: 'Trailer' }]
};

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
  if (!isApiKeyAvailable) {
    console.warn('TMDB API key not available. Using fallback data.');
    return fallbackMovies;
  }
  
  try {
    const url = `${baseUrl}/movie/popular`;
    const response = await axios.get<TmdbResponse<TmdbMovie>>(url, {
      params: { api_key: apiKey, page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return fallbackMovies;
  }
};

export const searchMovies = async (query: string, page: number = 1): Promise<TmdbMovie[]> => {
  if (!isApiKeyAvailable) {
    console.warn('TMDB API key not available. Using fallback data for search.');
    return fallbackMovies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.overview.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  try {
    const url = `${baseUrl}/search/movie`;
    const response = await axios.get<TmdbResponse<TmdbMovie>>(url, {
      params: { api_key: apiKey, query, page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return fallbackMovies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.overview.toLowerCase().includes(query.toLowerCase())
    );
  }
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
  if (!isApiKeyAvailable) {
    console.warn('TMDB API key not available. Using fallback trailer data.');
    return fallbackTrailers[movieId] || [];
  }
  
  try {
    const url = `${baseUrl}/movie/${movieId}/videos`;
    const response = await axios.get<TmdbVideoResponse>(url, {
      params: { api_key: apiKey },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    // Return fallback data if API fails
    return fallbackTrailers[movieId] || [];
  }
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
  if (!isApiKeyAvailable) {
    console.warn('TMDB API key not available. Returning fallback movie details.');
    const fallbackMovie = fallbackMovies.find(m => m.id === movieId);
    if (fallbackMovie) {
      return {
        id: fallbackMovie.id,
        title: fallbackMovie.title,
        overview: fallbackMovie.overview,
        poster_path: fallbackMovie.poster_path,
        vote_average: fallbackMovie.vote_average,
        revenue: 0,
        runtime: 120,
        release_date: '2023-01-01',
        genres: [],
        spoken_languages: [],
        tagline: ''
      };
    }
    throw new Error('Movie not found');
  }
  
  try {
    const url = `${baseUrl}/movie/${movieId}`;
    const response = await axios.get<TmdbMovieDetails>(url, {
      params: { api_key: apiKey },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// New: fetch available genres and discover movies by preferences
export interface Genre { id: number; name: string; }

export const fetchGenres = async (): Promise<Genre[]> => {
  if (!isApiKeyAvailable) {
    console.warn('TMDB API key not available. Returning fallback genres.');
    return [
      { id: 18, name: 'Drama' },
      { id: 28, name: 'Action' },
      { id: 80, name: 'Crime' },
      { id: 53, name: 'Thriller' },
      { id: 878, name: 'Science Fiction' },
      { id: 12, name: 'Adventure' }
    ];
  }
  
  try {
    const url = `${baseUrl}/genre/movie/list`;
    const response = await axios.get<{ genres: Genre[] }>(url, {
      params: { api_key: apiKey },
    });
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

export const discoverMovies = async (
  genres: number[],
  page: number = 1,
  minRating: number = 0
): Promise<TmdbMovie[]> => {
  if (!isApiKeyAvailable) {
    console.warn('TMDB API key not available. Using fallback data for discovery.');
    return fallbackMovies.filter(movie => 
      genres.length === 0 || movie.genre_ids.some(id => genres.includes(id))
    );
  }
  
  try {
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
  } catch (error) {
    console.error('Error discovering movies:', error);
    return fallbackMovies.filter(movie => 
      genres.length === 0 || movie.genre_ids.some(id => genres.includes(id))
    );
  }
};

// New: Person search and advanced discovery functions
export interface TmdbPerson { id: number; name: string; }

export const searchPerson = async (query: string): Promise<TmdbPerson[]> => {
  if (!isApiKeyAvailable) {
    console.warn('TMDB API key not available. Returning empty person list.');
    return [];
  }
  
  try {
    const url = `${baseUrl}/search/person`;
    const response = await axios.get<{ results: TmdbPerson[] }>(url, {
      params: { api_key: apiKey, query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching person:', error);
    return [];
  }
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
  if (!isApiKeyAvailable) {
    console.warn('TMDB API key not available. Using fallback data for advanced discovery.');
    return fallbackMovies.filter(movie => 
      !options.genreIds || options.genreIds.length === 0 || 
      movie.genre_ids.some(id => options.genreIds!.includes(id))
    );
  }
  
  try {
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
  } catch (error) {
    console.error('Error discovering advanced movies:', error);
    return fallbackMovies.filter(movie => 
      !options.genreIds || options.genreIds.length === 0 || 
      movie.genre_ids.some(id => options.genreIds!.includes(id))
    );
  }
};