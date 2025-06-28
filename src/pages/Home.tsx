import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Box,
  Typography,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import MovieCard from '../components/MovieCard';
import { fetchPopularMovies, searchMovies, TmdbMovie } from '../api';
import { useLanguage } from '../contexts/LanguageContext';
import { useSocialFeed } from '../contexts/SocialFeedContext';
import { Movie } from '../types/Movie';

interface HomeProps {
  onMovieSelect: (movie: Movie) => void;
}

const Home: React.FC<HomeProps> = ({ onMovieSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { feed } = useSocialFeed();
  const [page, setPage] = useState(1);
  const [tmdbMovies, setTmdbMovies] = useState<TmdbMovie[]>([]);
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Map TMDB data to our Movie type
  const mapToMovie = (tmdb: TmdbMovie): Movie => ({
    id: tmdb.id,
    title: tmdb.title,
    description: tmdb.overview,
    imageUrl: tmdb.poster_path ? `https://image.tmdb.org/t/p/w500${tmdb.poster_path}` : '',
    rating: tmdb.vote_average,
    price: Number((Math.random() * (500 - 150) + 150).toFixed(2)),
    genres: [],
    industry: 'Movie',
    insights: {
      boxOffice: 'N/A',
      awards: [],
      trivia: [],
      cast: [],
      crew: [],
    },
  });

  // Fetch movies from TMDB when component mounts or searchTerm/page changes
  useEffect(() => {
    let active = true;
    const fetchFn = searchTerm.trim() === ''
      ? (pg: number) => fetchPopularMovies(pg)
      : (pg: number) => searchMovies(searchTerm, pg);
    fetchFn(page).then((movies: TmdbMovie[]) => {
      if (!active) return;
      setTmdbMovies(prev => page === 1 ? movies : [...prev, ...movies]);
    });
    return () => { active = false; };
  }, [searchTerm, page]);

  // Reset page when search term changes
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const displayedMovies = tmdbMovies.map(mapToMovie);

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h1" 
          gutterBottom
          sx={{ 
            textAlign: { xs: 'center', sm: 'left' },
            mb: { xs: 1, sm: 2 }
          }}
        >
          {t('home.title')}
        </Typography>
        <Typography 
          variant={isMobile ? "body1" : "subtitle1"} 
          color="text.secondary" 
          paragraph
          sx={{ 
            textAlign: { xs: 'center', sm: 'left' },
            mb: { xs: 2, sm: 3 }
          }}
        >
          {t('home.subtitle')}
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder={t('home.search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              height: { xs: 40, sm: 48 },
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {/* Community recommendations (always visible) */}
      {feed.length > 0 && (
        <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
          <Typography variant={isMobile ? 'h5' : 'h4'} component="h2" gutterBottom>
            Community Recommendations
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, sm: 3 },
            }}
          >
            {feed.map(item => (
              <Box key={item.id}>
                <MovieCard
                  movie={item.movie}
                  onClick={() => onMovieSelect(item.movie)}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: { xs: 2, sm: 3 },
        }}
      >
        {displayedMovies.map((movie) => (
          <Box key={movie.id}>
            <MovieCard
              movie={movie}
              onClick={() => onMovieSelect(movie)}
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" onClick={() => setPage(prev => prev + 1)}>
          {t('home.loadMore')}
        </Button>
      </Box>
    </Container>
  );
};

export default Home; 