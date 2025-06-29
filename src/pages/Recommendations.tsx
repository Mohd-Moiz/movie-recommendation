import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Grid, Box, Autocomplete, TextField, Slider, Button, IconButton, Tooltip, Skeleton, useTheme, useMediaQuery, Card, CardActionArea, Chip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MicIcon from '@mui/icons-material/Mic';
import { Movie as MovieIcon, Star as StarIcon, Favorite as FavoriteIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { fetchGenres, discoverMovies, fetchPopularMovies, searchMovies, TmdbMovie, Genre } from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types/Movie';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface RecommendationsProps {
  onMovieSelect: (movie: Movie) => void;
}

const Recommendations: React.FC<RecommendationsProps> = ({ onMovieSelect }) => {
  const [tmdbMovies, setTmdbMovies] = useState<TmdbMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollOffset = isDesktop ? 400 : 300;

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const mapToMovie = (tmdb: TmdbMovie): Movie => ({
    id: tmdb.id,
    title: tmdb.title,
    description: tmdb.overview,
    imageUrl: tmdb.poster_path ? `https://image.tmdb.org/t/p/w500${tmdb.poster_path}` : '',
    rating: tmdb.vote_average,
    price: Number((Math.random() * (500 - 150) + 150).toFixed(2)),
    genres: [],
    industry: 'Movie',
    insights: { boxOffice: 'N/A', awards: [], trivia: [], cast: [], crew: [] },
  });

  useEffect(() => {
    fetchGenres()
      .then(list => {
        setGenres(list);
        // load stored genre preferences
        const saved = localStorage.getItem('preferredGenres');
        const ids: number[] = saved ? JSON.parse(saved) : [];
        const initial = list.filter(g => ids.includes(g.id));
        setSelectedGenres(initial);
        setLoading(true);
        if (ids.length > 0) {
          discoverMovies(ids, 1, minRating)
            .then(movies => setTmdbMovies(movies))
            .catch(err => console.error('Failed fetching recommendations:', err))
            .finally(() => setLoading(false));
        } else {
          fetchPopularMovies()
            .then(movies => setTmdbMovies(movies))
            .catch(err => console.error('Failed fetching popular movies:', err))
            .finally(() => setLoading(false));
        }
      })
      .catch(err => console.error('Failed fetching genres:', err));
  }, [genres, minRating]);

  const handleFilter = () => {
    setLoading(true);
    const ids = selectedGenres.map(g => g.id);
    // save preferences
    localStorage.setItem('preferredGenres', JSON.stringify(ids));
    if (ids.length > 0) {
      discoverMovies(ids, 1, minRating)
        .then(movies => setTmdbMovies(movies))
        .catch(err => console.error('Failed fetching recommendations:', err))
        .finally(() => setLoading(false));
    } else {
      fetchPopularMovies()
        .then(movies => setTmdbMovies(movies))
        .catch(err => console.error('Failed fetching popular movies:', err))
        .finally(() => setLoading(false));
    }
  };

  const startListening = () => {
    if (!browserSupportsSpeechRecognition) {
      alert('Speech recognition not supported');
      return;
    }
    resetTranscript();
    SpeechRecognition.startListening({ continuous: false, language: 'en-US' });
  };

  useEffect(() => {
    if (transcript) {
      const text = transcript;
      // perform search/discover based on transcript
      const inputLower = text.toLowerCase();
      const found = genres.filter(g => inputLower.includes(g.name.toLowerCase()));
      setSelectedGenres(found);
      setLoading(true);
      if (found.length > 0) {
        discoverMovies(found.map(g => g.id), 1, minRating)
          .then(m => setTmdbMovies(m))
          .catch(err => console.error('Voice discover error:', err))
          .finally(() => setLoading(false));
      } else {
        searchMovies(text)
          .then(m => setTmdbMovies(m))
          .catch(err => console.error('Voice search error:', err))
          .finally(() => setLoading(false));
      }
    }
  }, [transcript]);

  // --- New: Features for 2026 ---
  const features = [
    {
      icon: <MovieIcon color='primary' fontSize='large' />, 
      title: 'AI Movie Recommendations', 
      desc: 'Personalized suggestions powered by AI.'
    },
    {
      icon: <FavoriteIcon color='secondary' fontSize='large' />, 
      title: 'Smart Watchlist', 
      desc: 'Save and organize your favorite movies.'
    },
    {
      icon: <TrendingUpIcon color='success' fontSize='large' />, 
      title: 'Trending Now', 
      desc: 'See what\'s popular worldwide.'
    },
    {
      icon: <StarIcon color='warning' fontSize='large' />, 
      title: 'Top Rated', 
      desc: 'Discover the best movies as rated by users.'
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
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
      </Box>

      {/* Features Preview */}
      <Grid container spacing={3} sx={{ mb: { xs: 3, sm: 5 } }} justifyContent="center">
        {features.map((feature, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card elevation={2} sx={{ borderRadius: 3, textAlign: 'center', py: 3, px: 1, height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
              <CardActionArea sx={{ py: 2 }} disableRipple>
                <Box sx={{ mb: 1 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Vision 2026 Section */}
      <Box sx={{ mb: { xs: 3, sm: 5 }, textAlign: 'center' }}>
        <Chip label="Vision 2026" color="primary" sx={{ fontWeight: 700, fontSize: 16, mb: 2, px: 2, py: 1 }} />
        <Typography variant={isMobile ? 'body1' : 'h5'} color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Our vision for 2026: Seamless, AI-powered, global movie discovery for everyone.
        </Typography>
      </Box>

      {/* Preference selectors */}
      <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <Tooltip title="Voice Search">
          <IconButton onClick={startListening} color={listening ? 'primary' : 'default'} aria-label="Voice Search">
            <MicIcon />
          </IconButton>
        </Tooltip>
        {transcript && (
          <Typography variant="body2" color="text.secondary">
            You said: "{transcript}"
          </Typography>
        )}
        <Autocomplete
          multiple
          options={genres}
          getOptionLabel={(g) => g.name}
          value={selectedGenres}
          onChange={(_, v) => setSelectedGenres(v)}
          sx={{ minWidth: 240 }}
          renderInput={(params) => <TextField {...params} label="Genres" variant="outlined" />}
        />
        <Box sx={{ width: 200 }}>
          <Typography gutterBottom>Min Rating</Typography>
          <Slider
            value={minRating}
            onChange={(_, v) => setMinRating(v as number)}
            valueLabelDisplay="auto"
            step={0.5}
            marks
            min={0}
            max={10}
          />
        </Box>
        <Button variant="contained" onClick={handleFilter}>Apply</Button>
      </Box>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {selectedGenres.length > 0
          ? `Showing recommendations for: ${selectedGenres.map(g => g.name).join(', ')}`
          : 'Showing recommendations for all genres'}
      </Typography>
      <Typography variant="h4" gutterBottom>Discover New Movies</Typography>
      {loading ? (
        <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, p: 2, mt: 2 }}>
          {Array.from({ length: isDesktop ? 6 : 3 }).map((_, i) => (
            <Skeleton key={i} variant="rectangular" width={isDesktop ? 240 : '80%'} height={360} sx={{ borderRadius: 2, m: 1 }} />
          ))}
        </Box>
      ) : tmdbMovies.length === 0 ? (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography>No movies found.</Typography>
        </Box>
      ) : isDesktop ? (
        <Box sx={{ position: 'relative', mt: 2 }}>
          <IconButton onClick={() => scrollRef.current?.scrollBy({ left: -scrollOffset, behavior: 'smooth' })} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
            <ArrowBackIosIcon />
          </IconButton>
          <Box ref={scrollRef} sx={{ display: 'flex', overflowX: 'auto', gap: 2, p: 2, scrollSnapType: 'x mandatory' }}>
            {tmdbMovies.map(tmdb => {
              const movie = mapToMovie(tmdb);
              return (
                <Box key={movie.id} sx={{ scrollSnapAlign: 'start', minWidth: 240 }}>
                  <MovieCard movie={movie} onClick={() => onMovieSelect(movie)} />
                </Box>
              );
            })}
          </Box>
          <IconButton onClick={() => scrollRef.current?.scrollBy({ left: scrollOffset, behavior: 'smooth' })} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      ) : (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {tmdbMovies.map(tmdb => {
            const movie = mapToMovie(tmdb);
            return (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} onClick={() => onMovieSelect(movie)} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

export default Recommendations;