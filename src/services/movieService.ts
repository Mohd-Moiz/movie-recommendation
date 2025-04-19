import { Movie } from '../types/movie';

const OMDb_BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'demo';
const PIPED_API_URL = 'https://pipedapi.kavin.rocks';

// Mock data for testing
const MOCK_MOVIES: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    rating: 9.3,
    popularity: 100,
    price: 299,
    genres: ["Drama"],
    industry: "Hollywood",
    releaseDate: "1994-09-23",
    trailerUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    streamingUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    duration: "142 min",
    ageRating: "R",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹28.3M",
      awards: ["Nominated for 7 Oscars", "Won 2 Golden Globes"],
      trivia: [
        "The film was shot in just 40 days",
        "Morgan Freeman's character was originally written for Clint Eastwood"
      ],
      cast: [
        { name: "Tim Robbins", role: "Andy Dufresne" },
        { name: "Morgan Freeman", role: "Ellis Boyd 'Red' Redding" }
      ],
      crew: [
        { name: "Frank Darabont", role: "Director" },
        { name: "Stephen King", role: "Writer" }
      ]
    }
  },
  {
    id: 2,
    title: "RRR",
    description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTQtOGQ0ODgxOWY0YjY2XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
    rating: 8.0,
    popularity: 95,
    price: 199,
    genres: ["Action", "Drama", "Period"],
    industry: "Tollywood",
    releaseDate: "2022-03-25",
    trailerUrl: "https://www.youtube.com/watch?v=f_vbAtFSEc0",
    streamingUrl: "https://www.youtube.com/watch?v=f_vbAtFSEc0",
    duration: "187 min",
    ageRating: "PG-13",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹1,200 crore",
      awards: ["Won 2 Oscars", "Won 2 Golden Globes"],
      trivia: [
        "The film's budget was approximately ₹550 crore",
        "The film was shot in multiple languages"
      ],
      cast: [
        { name: "N.T. Rama Rao Jr.", role: "Komaram Bheem" },
        { name: "Ram Charan", role: "Alluri Sitarama Raju" }
      ],
      crew: [
        { name: "S.S. Rajamouli", role: "Director" },
        { name: "M.M. Keeravani", role: "Composer" }
      ]
    }
  },
  {
    id: 3,
    title: "Dangal",
    description: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    rating: 8.4,
    popularity: 92,
    price: 149,
    genres: ["Biography", "Drama", "Sport"],
    industry: "Bollywood",
    releaseDate: "2016-12-23",
    trailerUrl: "https://www.youtube.com/watch?v=x_7YlGv9u1g",
    streamingUrl: "https://www.youtube.com/watch?v=x_7YlGv9u1g",
    duration: "161 min",
    ageRating: "PG",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹2,000 crore",
      awards: ["National Film Award for Best Film", "Filmfare Award for Best Film"],
      trivia: [
        "Aamir Khan gained 30 kgs for the role",
        "The film is based on a true story"
      ],
      cast: [
        { name: "Aamir Khan", role: "Mahavir Singh Phogat" },
        { name: "Sakshi Tanwar", role: "Daya Kaur" }
      ],
      crew: [
        { name: "Nitesh Tiwari", role: "Director" },
        { name: "Pritam", role: "Composer" }
      ]
    }
  },
  {
    id: 4,
    title: "Baahubali: The Beginning",
    description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDZjZWViN2YtOWY2Yi00YjA0LWFmYjMtM2QyZGU0YzQ0YjQ5XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
    rating: 8.0,
    popularity: 90,
    price: 179,
    genres: ["Action", "Adventure", "Drama"],
    industry: "Tollywood",
    releaseDate: "2015-07-10",
    trailerUrl: "https://www.youtube.com/watch?v=3NQRhE772b0",
    streamingUrl: "https://www.youtube.com/watch?v=3NQRhE772b0",
    duration: "159 min",
    ageRating: "PG-13",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹650 crore",
      awards: ["National Film Award for Best Feature Film"],
      trivia: [
        "The film was made in two parts",
        "It took 2 years to complete the visual effects"
      ],
      cast: [
        { name: "Prabhas", role: "Baahubali" },
        { name: "Rana Daggubati", role: "Bhallaladeva" }
      ],
      crew: [
        { name: "S.S. Rajamouli", role: "Director" },
        { name: "M.M. Keeravani", role: "Composer" }
      ]
    }
  },
  {
    id: 5,
    title: "3 Idiots",
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 8.4,
    popularity: 88,
    price: 129,
    genres: ["Comedy", "Drama"],
    industry: "Bollywood",
    releaseDate: "2009-12-25",
    trailerUrl: "https://www.youtube.com/watch?v=K0eGVlUpcTI",
    streamingUrl: "https://www.youtube.com/watch?v=K0eGVlUpcTI",
    duration: "170 min",
    ageRating: "PG-13",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹460 crore",
      awards: ["Filmfare Award for Best Film"],
      trivia: [
        "The film is based on the novel 'Five Point Someone'",
        "Aamir Khan played a college student at age 44"
      ],
      cast: [
        { name: "Aamir Khan", role: "Rancho" },
        { name: "R. Madhavan", role: "Farhan" }
      ],
      crew: [
        { name: "Rajkumar Hirani", role: "Director" },
        { name: "Shantanu Moitra", role: "Composer" }
      ]
    }
  },
  {
    id: 6,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    rating: 8.8,
    popularity: 95,
    price: 249,
    genres: ["Action", "Sci-Fi", "Thriller"],
    industry: "Hollywood",
    releaseDate: "2010-07-16",
    trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    streamingUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    duration: "148 min",
    ageRating: "PG-13",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹836.8 crore",
      awards: ["Won 4 Oscars", "Won 3 BAFTAs"],
      trivia: [
        "The spinning top at the end was actually spinning",
        "The hallway fight scene took 3 weeks to film"
      ],
      cast: [
        { name: "Leonardo DiCaprio", role: "Cobb" },
        { name: "Joseph Gordon-Levitt", role: "Arthur" }
      ],
      crew: [
        { name: "Christopher Nolan", role: "Director" },
        { name: "Hans Zimmer", role: "Composer" }
      ]
    }
  }
];

// Mock streaming URLs and prices for demonstration
const MOVIE_DATA = {
  'tt0111161': { // The Shawshank Redemption
    streamingUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
    price: 3.99,
    duration: '142 min',
    ageRating: 'R'
  },
  'tt0068646': { // The Godfather
    streamingUrl: 'https://www.youtube.com/watch?v=sY1S34973zA',
    price: 4.99,
    duration: '175 min',
    ageRating: 'R'
  },
  'tt0468569': { // The Dark Knight
    streamingUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    price: 4.99,
    duration: '152 min',
    ageRating: 'PG-13'
  },
  // Add more movies as needed
};

// Mock video URLs for demonstration
const VIDEO_URLS = {
  'Inception': 'https://example.com/videos/inception-trailer.mp4',
  'The Dark Knight': 'https://example.com/videos/dark-knight-trailer.mp4',
  'Interstellar': 'https://example.com/videos/interstellar-trailer.mp4',
  // Add more movie video URLs as needed
};

// Add logging to check API key
console.log('OMDb API Key:', API_KEY);

export interface MovieRecommendation {
  movie: Movie;
  score: number;
  reason: string;
}

// Helper function to calculate movie similarity
const calculateMovieSimilarity = (movie1: Movie, movie2: Movie): number => {
  let similarity = 0;
  
  // Genre similarity
  const genreIntersection = movie1.genres.filter(genre => 
    movie2.genres.includes(genre)
  ).length;
  similarity += (genreIntersection / Math.max(movie1.genres.length, movie2.genres.length)) * 3;
  
  // Rating similarity
  similarity += (1 - Math.abs(movie1.rating - movie2.rating) / 10) * 2;
  
  // Popularity similarity
  similarity += (1 - Math.abs(movie1.popularity - movie2.popularity) / 100) * 1;
  
  return similarity;
};

export const getPopularMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    if (!API_KEY || API_KEY === 'demo') {
      console.log('Using mock data as API key is not set');
      return MOCK_MOVIES;
    }

    const url = `${OMDb_BASE_URL}?apikey=${API_KEY}&s=movie&type=movie&page=${page}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('API request failed, falling back to mock data');
      return MOCK_MOVIES;
    }
    
    const data = await response.json();
    
    if (data.Response === 'True') {
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie: any) => {
          const details = await getMovieById(movie.imdbID);
          return details || {
            id: parseInt(movie.imdbID.replace('tt', '')),
            title: movie.Title,
            description: '',
            imageUrl: movie.Poster,
            rating: 0,
            popularity: 0,
            price: 199, // Default price in INR
            genres: [],
            industry: '',
            releaseDate: movie.Year,
            trailerUrl: `https://www.youtube.com/watch?v=${movie.imdbID}`,
            streamingUrl: '',
            duration: '',
            ageRating: '',
            reviews: [],
            tags: [],
            insights: {
              boxOffice: '',
              awards: [],
              trivia: [],
              cast: [],
              crew: []
            }
          };
        })
      );
      
      return detailedMovies.filter((movie): movie is Movie => movie !== null);
    } else {
      console.error('API response error, falling back to mock data');
      return MOCK_MOVIES;
    }
  } catch (error) {
    console.error('Error fetching popular movies, falling back to mock data:', error);
    return MOCK_MOVIES;
  }
};

// Function to get video information from Piped
export const getVideoInfo = async (videoId: string) => {
  try {
    const response = await fetch(`${PIPED_API_URL}/streams/${videoId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch video info');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching video info:', error);
    return null;
  }
};

// Function to search videos on Piped
export const searchVideos = async (query: string) => {
  try {
    const response = await fetch(`${PIPED_API_URL}/search?q=${encodeURIComponent(query)}&filter=videos`);
    if (!response.ok) {
      throw new Error('Failed to search videos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching videos:', error);
    return null;
  }
};

// Function to get movie trailer URL using Piped
export const getMovieTrailerUrl = async (movieTitle: string) => {
  try {
    const searchQuery = `${movieTitle} official trailer`;
    const searchResults = await searchVideos(searchQuery);
    
    if (searchResults && searchResults.items && searchResults.items.length > 0) {
      const videoId = searchResults.items[0].videoId;
      const videoInfo = await getVideoInfo(videoId);
      
      if (videoInfo) {
        // Get the best quality video URL
        const videoUrl = videoInfo.videoStreams
          .sort((a: any, b: any) => b.quality.localeCompare(a.quality))[0]?.url;
        
        return videoUrl || `https://www.youtube.com/watch?v=${videoId}`;
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting movie trailer:', error);
    return null;
  }
};

export const getMovieById = async (id: string): Promise<Movie | null> => {
  try {
    if (!API_KEY || API_KEY === 'demo') {
      console.log('Using mock data as API key is not set');
      return MOCK_MOVIES[0];
    }

    const url = `${OMDb_BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('API request failed, falling back to mock data');
      return MOCK_MOVIES[0];
    }
    
    const data = await response.json();
    
    if (data.Response === 'True') {
      return {
        id: parseInt(data.imdbID.replace('tt', '')),
        title: data.Title,
        description: data.Plot,
        imageUrl: data.Poster,
        rating: parseFloat(data.imdbRating) || 0,
        popularity: parseFloat(data.imdbVotes?.replace(/,/g, '') || '0'),
        price: 2.99,
        genres: data.Genre ? data.Genre.split(', ') : [],
        industry: data.Production || 'Unknown',
        releaseDate: data.Released,
        trailerUrl: `https://www.youtube.com/watch?v=${data.imdbID}`,
        streamingUrl: '',
        duration: data.Runtime || '',
        ageRating: data.Rated || '',
        reviews: [],
        tags: [],
        insights: {
          boxOffice: data.BoxOffice || '',
          awards: [data.Awards],
          trivia: [],
          cast: [],
          crew: []
        }
      };
    } else {
      console.error('API response error, falling back to mock data');
      return MOCK_MOVIES[0];
    }
  } catch (error) {
    console.error('Error fetching movie details, falling back to mock data:', error);
    return MOCK_MOVIES[0];
  }
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    if (!API_KEY || API_KEY === 'demo') {
      console.log('Using mock data for search as API key is not set');
      // Filter mock movies based on search query
      return MOCK_MOVIES.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase()))
      );
    }

    const url = `${OMDb_BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('API request failed, falling back to mock data');
      return MOCK_MOVIES;
    }
    
    const data = await response.json();
    
    if (data.Response === 'True') {
      // Fetch detailed information for each movie
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie: any) => {
          const details = await getMovieById(movie.imdbID);
          return details || {
            id: parseInt(movie.imdbID.replace('tt', '')),
            title: movie.Title,
            description: '',
            imageUrl: movie.Poster,
            rating: 0,
            popularity: 0,
            price: 2.99,
            genres: [],
            industry: '',
            releaseDate: movie.Year,
            trailerUrl: `https://www.youtube.com/watch?v=${movie.imdbID}`,
            streamingUrl: '',
            duration: '',
            ageRating: '',
            reviews: [],
            tags: [],
            insights: {
              boxOffice: '',
              awards: [],
              trivia: [],
              cast: [],
              crew: []
            }
          };
        })
      );
      
      return detailedMovies.filter((movie): movie is Movie => movie !== null);
    } else {
      console.error('API response error, falling back to mock data');
      return MOCK_MOVIES;
    }
  } catch (error) {
    console.error('Error searching movies, falling back to mock data:', error);
    return MOCK_MOVIES;
  }
};

export const getStreamingUrl = async (movieTitle: string): Promise<string> => {
  try {
    // Search for the movie trailer on YouTube
    const searchUrl = `${OMDb_BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(movieTitle + ' official trailer')}&type=movie`;
    const response = await fetch(searchUrl);
    const data = await response.json();

    if (data.Response === 'True') {
      const videoId = data.Search[0].imdbID.replace('tt', '');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return '';
  } catch (error) {
    console.error('Error fetching YouTube video:', error);
    return '';
  }
};

export const getRecommendations = async (
  userId: string,
  preferences: any
): Promise<MovieRecommendation[]> => {
  try {
    // Get user's watched movies
    const watchedMovies = preferences.watchedMovies || [];
    
    // Get popular movies
    const popularMovies = await getPopularMovies();
    
    // Calculate recommendations based on watched movies
    const recommendations = popularMovies
      .filter(movie => !watchedMovies.includes(movie.id))
      .map(movie => {
        let score = 0;
        let reason = '';
        
        // Calculate score based on preferences
        if (preferences.favoriteGenres) {
          const genreMatch = movie.genres.filter(genre => 
            preferences.favoriteGenres.includes(genre)
          ).length;
          score += genreMatch * 2;
          if (genreMatch > 0) {
            reason += `Matches your favorite genres. `;
          }
        }
        
        if (preferences.favoriteMovies) {
          const favoriteMovies = preferences.favoriteMovies.map((id: string) => 
            popularMovies.find(m => m.id === parseInt(id))
          ).filter(Boolean);
          
          const similarityScore = favoriteMovies.reduce((max: number, favMovie: Movie) => {
            const similarity = calculateMovieSimilarity(movie, favMovie);
            return Math.max(max, similarity);
          }, 0);
          
          score += similarityScore;
          if (similarityScore > 0) {
            reason += `Similar to movies you like. `;
          }
        }
        
        // Add rating-based score
        score += movie.rating / 2;
        reason += `Highly rated by users.`;
        
        return {
          movie,
          score,
          reason
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    
    return recommendations;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    throw error;
  }
};

export const getMovieVideoUrl = (movieTitle: string): string => {
  return VIDEO_URLS[movieTitle as keyof typeof VIDEO_URLS] || '';
}; 