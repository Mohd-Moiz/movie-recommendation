import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  CircularProgress, 
  Alert, 
  TextField, 
  InputAdornment, 
  useTheme, 
  useMediaQuery, 
  Chip, 
  Stack,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import MovieCard from '../components/MovieCard';
import { getPopularMovies, searchMovies } from '../services/movieService';
import { Movie } from '../types/movie';

const INDUSTRIES = ['All', 'Hollywood', 'Bollywood', 'Tollywood'];
const GENRES = ['All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi', 'Thriller', 'Biography', 'Sport', 'Period'];
const AGE_RATINGS = ['All', 'G', 'PG', 'PG-13', 'R', 'NC-17'];
const SORT_OPTIONS = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'releaseDate', label: 'Newest First' },
  { value: 'price', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' }
];

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedAgeRating, setSelectedAgeRating] = useState('All');
  const [yearRange, setYearRange] = useState<[number, number]>([1990, 2024]);
  const [ratingRange, setRatingRange] = useState<[number, number]>([0, 10]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState('popularity');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const popularMovies = await getPopularMovies(page);
        setMovies(prevMovies => [...prevMovies, ...popularMovies]);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError('Failed to load movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      setMovies([]);
      
      if (query.trim() === '') {
        const popularMovies = await getPopularMovies(1);
        setMovies(popularMovies);
      } else {
        const searchResults = await searchMovies(query);
        if (searchResults.length === 0) {
          setError('No movies found matching your search.');
        } else {
          setMovies(searchResults);
        }
      }
    } catch (err) {
      console.error('Error searching movies:', err);
      setError('Failed to search movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredMovies = movies
    .filter(movie => {
      const industryMatch = selectedIndustry === 'All' || movie.industry === selectedIndustry;
      const genreMatch = selectedGenre === 'All' || movie.genres.some(g => g === selectedGenre);
      const ageRatingMatch = selectedAgeRating === 'All' || 
        movie.ageRating === selectedAgeRating ||
        !movie.ageRating;
      const releaseYear = movie.releaseDate ? parseInt(movie.releaseDate.split('-')[0]) : 2000;
      const yearMatch = releaseYear >= yearRange[0] && releaseYear <= yearRange[1];
      const ratingMatch = (movie.rating || 0) >= ratingRange[0] && (movie.rating || 0) <= ratingRange[1];
      const priceMatch = (movie.price || 0) >= priceRange[0] && (movie.price || 0) <= priceRange[1];
      const searchMatch = !searchQuery || 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase())) ||
        movie.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (movie.description && movie.description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return industryMatch && genreMatch && ageRatingMatch && yearMatch && ratingMatch && priceMatch && searchMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popularity || 0) - (a.popularity || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'releaseDate':
          return new Date(b.releaseDate || '').getTime() - new Date(a.releaseDate || '').getTime();
        case 'price':
          return (a.price || 0) - (b.price || 0);
        case 'price-desc':
          return (b.price || 0) - (a.price || 0);
        default:
          return 0;
      }
    });

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Popular Movies
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
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

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {SORT_OPTIONS.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Age Rating</InputLabel>
                <Select
                  value={selectedAgeRating}
                  label="Age Rating"
                  onChange={(e) => setSelectedAgeRating(e.target.value)}
                >
                  {AGE_RATINGS.map(rating => (
                    <MenuItem key={rating} value={rating}>
                      {rating}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Stack direction="row" spacing={1} sx={{ mb: 3, mt: 3, flexWrap: 'wrap', gap: 1 }}>
            <Typography variant="subtitle1" sx={{ mr: 1 }}>Industry:</Typography>
            {INDUSTRIES.map((industry) => (
              <Chip
                key={industry}
                label={industry}
                onClick={() => setSelectedIndustry(industry)}
                color={selectedIndustry === industry ? 'primary' : 'default'}
                sx={{ m: 0.5 }}
              />
            ))}
          </Stack>

          <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
            <Typography variant="subtitle1" sx={{ mr: 1 }}>Genre:</Typography>
            {GENRES.map((genre) => (
              <Chip
                key={genre}
                label={genre}
                onClick={() => setSelectedGenre(genre)}
                color={selectedGenre === genre ? 'primary' : 'default'}
                sx={{ m: 0.5 }}
              />
            ))}
          </Stack>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography gutterBottom>Year Range</Typography>
              <Slider
                value={yearRange}
                onChange={(_, newValue) => setYearRange(newValue as [number, number])}
                valueLabelDisplay="auto"
                min={1990}
                max={2024}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography gutterBottom>Rating Range</Typography>
              <Slider
                value={ratingRange}
                onChange={(_, newValue) => setRatingRange(newValue as [number, number])}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                step={0.1}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography gutterBottom>Price Range (₹)</Typography>
              <Slider
                value={priceRange}
                onChange={(_, newValue) => setPriceRange(newValue as [number, number])}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `₹${value}`}
                min={0}
                max={500}
                step={10}
              />
            </Grid>
          </Grid>
        </Paper>
        
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ my: 2 }}>
            {error}
          </Alert>
        )}

        {!loading && !error && filteredMovies.length === 0 && (
          <Alert severity="info" sx={{ my: 2 }}>
            No movies found matching your criteria. Try adjusting your filters.
          </Alert>
        )}

        {!loading && !error && filteredMovies.length > 0 && (
          <Grid container spacing={3}>
            {filteredMovies.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Home;