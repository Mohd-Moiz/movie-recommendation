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
  Grid,
  Card,
  CardActionArea,
  Chip,
  Snackbar,
  Alert,
} from '@mui/material';
import { Search as SearchIcon, Movie as MovieIcon, Star as StarIcon, Favorite as FavoriteIcon, TrendingUp as TrendingUpIcon, } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
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
  const { user } = useAuth();
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({ open: false, message: '' });

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

  // --- New: Features for 2026 ---
  const features = [
    {
      icon: <MovieIcon color='primary' fontSize='large' />, 
      title: 'AI Movie Recommendations', 
      desc: 'Personalized suggestions powered by AI.',
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      icon: <FavoriteIcon color='secondary' fontSize='large' />, 
      title: 'Smart Watchlist', 
      desc: 'Save and organize your favorite movies.',
      onClick: () => user ? navigate('/watchlist') : setSnackbar({ open: true, message: 'Please login to access your watchlist.' })
    },
    {
      icon: <TrendingUpIcon color='success' fontSize='large' />, 
      title: 'Trending Now', 
      desc: 'See what\'s popular worldwide.',
      onClick: () => window.scrollTo({ top: 800, behavior: 'smooth' })
    },
    {
      icon: <StarIcon color='warning' fontSize='large' />, 
      title: 'Top Rated', 
      desc: 'Discover the best movies as rated by users.',
      onClick: () => setSnackbar({ open: true, message: 'Top Rated coming soon!' })
    },
  ];

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 4, sm: 6 },
          mb: { xs: 3, sm: 5 },
          textAlign: 'center',
          background: `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          sx={{
            fontWeight: 800,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          Movie Recommendations for the Future
        </Typography>
        <Typography
          variant={isMobile ? 'body1' : 'h6'}
          color="text.secondary"
          sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}
        >
          Discover, save, and share the best movies with AI-powered recommendations and a global community. Welcome to the next generation of movie discovery.
        </Typography>
        {!user && (
          <Button
            variant="contained"
            size={isMobile ? 'medium' : 'large'}
            sx={{ fontWeight: 700, px: 4, py: 1.5, borderRadius: 3 }}
            onClick={() => navigate('/login')}
          >
            Get Started
          </Button>
        )}
      </Box>

      {/* Features Preview */}
      <Grid container spacing={3} sx={{ mb: { xs: 3, sm: 5 } }} justifyContent="center">
        {features.map((feature, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card elevation={2} sx={{ borderRadius: 3, textAlign: 'center', py: 3, px: 1, height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
              <CardActionArea sx={{ py: 2 }} onClick={feature.onClick}>
                <Box sx={{ mb: 1 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ open: false, message: '' })}>
        <Alert severity="info" sx={{ width: '100%' }}>{snackbar.message}</Alert>
      </Snackbar>

      {/* Vision 2026 Section */}
      <Box sx={{ mb: { xs: 3, sm: 5 }, textAlign: 'center' }}>
        <Chip label="Vision 2026" color="primary" sx={{ fontWeight: 700, fontSize: 16, mb: 2, px: 2, py: 1 }} />
        <Typography variant={isMobile ? 'body1' : 'h5'} color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Our vision for 2026: Seamless, AI-powered, global movie discovery for everyone.
        </Typography>
      </Box>

      {/* Search and Trending Movies */}
      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          component="h1" 
          gutterBottom
          sx={{ 
            textAlign: { xs: 'center', sm: 'left' },
            mb: { xs: 1, sm: 2 },
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <TrendingUpIcon color="primary" sx={{ fontSize: 32, mr: 1 }} />
          Trending Movies
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