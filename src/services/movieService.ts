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
  },
  {
    id: 7,
    title: "Pathaan",
    description: "An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
    rating: 7.5,
    popularity: 85,
    price: 199,
    genres: ["Action", "Thriller"],
    industry: "Bollywood",
    releaseDate: "2023-01-25",
    trailerUrl: "https://www.youtube.com/watch?v=vqu4z34wENw",
    streamingUrl: "https://www.youtube.com/watch?v=vqu4z34wENw",
    duration: "146 min",
    ageRating: "PG-13",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹1,050 crore",
      awards: ["Filmfare Award for Best Action"],
      trivia: [
        "Shah Rukh Khan's comeback film after 4 years",
        "Biggest Bollywood opener of 2023"
      ],
      cast: [
        { name: "Shah Rukh Khan", role: "Pathaan" },
        { name: "Deepika Padukone", role: "Rubina" }
      ],
      crew: [
        { name: "Siddharth Anand", role: "Director" },
        { name: "Vishal-Shekhar", role: "Composers" }
      ]
    }
  },
  {
    id: 8,
    title: "Pushpa: The Rise",
    description: "A laborer rises through the ranks of a red sandalwood smuggling syndicate, making enemies along the way.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
    rating: 7.6,
    popularity: 88,
    price: 149,
    genres: ["Action", "Crime", "Drama"],
    industry: "Tollywood",
    releaseDate: "2021-12-17",
    trailerUrl: "https://www.youtube.com/watch?v=Q1NKMPhP8PY",
    streamingUrl: "https://www.youtube.com/watch?v=Q1NKMPhP8PY",
    duration: "179 min",
    ageRating: "PG-13",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹365 crore",
      awards: ["National Film Award South"],
      trivia: [
        "Shot simultaneously in Telugu and dubbed in multiple languages",
        "Known for its iconic songs and dialogues"
      ],
      cast: [
        { name: "Allu Arjun", role: "Pushpa Raj" },
        { name: "Rashmika Mandanna", role: "Srivalli" }
      ],
      crew: [
        { name: "Sukumar", role: "Director" },
        { name: "Devi Sri Prasad", role: "Composer" }
      ]
    }
  },
  {
    id: 9,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 9.0,
    popularity: 98,
    price: 299,
    genres: ["Action", "Crime", "Drama"],
    industry: "Hollywood",
    releaseDate: "2008-07-18",
    trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    streamingUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    duration: "152 min",
    ageRating: "PG-13",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹1,005 crore",
      awards: ["Won 2 Oscars", "Won 2 BAFTAs"],
      trivia: [
        "Heath Ledger posthumously won an Oscar for his role as the Joker",
        "Christopher Nolan's highest-grossing Batman film"
      ],
      cast: [
        { name: "Christian Bale", role: "Bruce Wayne/Batman" },
        { name: "Heath Ledger", role: "Joker" }
      ],
      crew: [
        { name: "Christopher Nolan", role: "Director" },
        { name: "Hans Zimmer", role: "Composer" }
      ]
    }
  },
  {
    id: 10,
    title: "KGF: Chapter 2",
    description: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    rating: 8.3,
    popularity: 92,
    price: 179,
    genres: ["Action", "Drama", "Period"],
    industry: "Tollywood",
    releaseDate: "2022-04-14",
    trailerUrl: "https://www.youtube.com/watch?v=JKa05nyUmuQ",
    streamingUrl: "https://www.youtube.com/watch?v=JKa05nyUmuQ",
    duration: "168 min",
    ageRating: "PG-13",
    reviews: [],
    tags: [],
    insights: {
      boxOffice: "₹1,250 crore",
      awards: ["Best Action Film - South"],
      trivia: [
        "Highest-grossing Kannada film of all time",
        "Shot in IMAX format"
      ],
      cast: [
        { name: "Yash", role: "Rocky" },
        { name: "Sanjay Dutt", role: "Adheera" }
      ],
      crew: [
        { name: "Prashanth Neel", role: "Director" },
        { name: "Ravi Basrur", role: "Composer" }
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
  console.log('API Key:', API_KEY); // Debug log
  console.log('Mock Movies:', MOCK_MOVIES); // Debug log

  // Always return mock data for now
  console.log('Returning mock movies:', MOCK_MOVIES);
  return MOCK_MOVIES;

  // The following code is commented out to ensure we always use mock data
  /*
  if (!API_KEY || API_KEY === 'demo') {
    console.log('Using mock data as API key is not set');
    return MOCK_MOVIES;
  }

  try {
    const url = `${OMDb_BASE_URL}?apikey=${API_KEY}&s=movie&type=movie&page=${page}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('API request failed, falling back to mock data');
      return MOCK_MOVIES;
    }
    
    const data = await response.json();
    
    if (data.Response === 'True' && data.Search) {
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie: any) => {
          const details = await getMovieById(movie.imdbID);
          return details;
        })
      );
      
      return detailedMovies.filter((movie): movie is Movie => movie !== null);
    }
    
    console.error('API response error, falling back to mock data');
    return MOCK_MOVIES;
  } catch (error) {
    console.error('Error fetching popular movies, falling back to mock data:', error);
    return MOCK_MOVIES;
  }
  */
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
  console.log('Searching movies with query:', query); // Debug log
  
  // Always search through mock data
  const searchResults = MOCK_MOVIES.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase())) ||
    movie.industry.toLowerCase().includes(query.toLowerCase()) ||
    (movie.description && movie.description.toLowerCase().includes(query.toLowerCase()))
  );
  
  console.log('Search results:', searchResults); // Debug log
  return searchResults;

  // The following code is commented out to ensure we always use mock data
  /*
  if (!API_KEY || API_KEY === 'demo') {
    console.log('Using mock data for search as API key is not set');
    return MOCK_MOVIES.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase())) ||
      movie.industry.toLowerCase().includes(query.toLowerCase())
    );
  }

  try {
    const url = `${OMDb_BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('API request failed, falling back to mock data search');
      return MOCK_MOVIES.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase())) ||
        movie.industry.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    const data = await response.json();
    
    if (data.Response === 'True' && data.Search) {
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie: any) => {
          const details = await getMovieById(movie.imdbID);
          return details;
        })
      );
      
      return detailedMovies.filter((movie): movie is Movie => movie !== null);
    }
    
    console.error('API response error, falling back to mock data search');
    return MOCK_MOVIES.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase())) ||
      movie.industry.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error('Error searching movies, falling back to mock data search:', error);
    return MOCK_MOVIES.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase())) ||
      movie.industry.toLowerCase().includes(query.toLowerCase())
    );
  }
  */
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