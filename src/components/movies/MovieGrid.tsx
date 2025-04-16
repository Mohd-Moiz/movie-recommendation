import React, { useState, useEffect, useCallback } from 'react';
import { Movie } from '../../types';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Rating,
  Button,
  useTheme,
  CircularProgress
} from '@mui/material';
import { Favorite, FavoriteBorder, Bookmark, BookmarkBorder } from '@mui/icons-material';
import { useUser } from '../../context/UserContext';
import FilterPanel from '../filters/FilterPanel';
import { useInView } from 'react-intersection-observer';
import BookingSystem from '../booking/BookingSystem';

interface MovieGridProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const ITEMS_PER_PAGE = 12;

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onMovieClick }) => {
  const [selectedMovieForBooking, setSelectedMovieForBooking] = useState<Movie | null>(null);
  const theme = useTheme();
  const { user, addToWatchlist, removeFromWatchlist, addToFavorites, removeFromFavorites } = useUser();
  
  // Filter states
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [ratingRange, setRatingRange] = useState<[number, number]>([0, 10]);
  const [yearRange, setYearRange] = useState<[number, number]>([1900, new Date().getFullYear()]);
  
  // Infinite scroll states
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();

  // Get unique genres and tags from all movies
  const allGenres = Array.from(new Set(movies.flatMap(movie => movie.genres)));
  const allTags = Array.from(new Set(movies.flatMap(movie => movie.tags)));

  // Filter movies based on selected criteria
  const filterMovies = useCallback(() => {
    return movies.filter(movie => {
      const matchesGenres = selectedGenres.length === 0 || 
        selectedGenres.every(genre => movie.genres.includes(genre));
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => movie.tags.includes(tag));
      
      const matchesRating = movie.rating >= ratingRange[0] && 
        movie.rating <= ratingRange[1];
      
      const movieYear = new Date(movie.releaseDate).getFullYear();
      const matchesYear = movieYear >= yearRange[0] && 
        movieYear <= yearRange[1];

      return matchesGenres && matchesTags && matchesRating && matchesYear;
    });
  }, [movies, selectedGenres, selectedTags, ratingRange, yearRange]);

  // Load more movies when scrolling
  useEffect(() => {
    const filteredMovies = filterMovies();
    const start = 0;
    const end = page * ITEMS_PER_PAGE;
    const newMovies = filteredMovies.slice(start, end);
    
    setDisplayedMovies(newMovies);
    setHasMore(end < filteredMovies.length);
  }, [filterMovies, page]);

  // Load more when scrolling to the bottom
  useEffect(() => {
    if (inView && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [inView, hasMore]);

  const handleGenreChange = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
    setPage(1);
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setPage(1);
  };

  const handleRatingRangeChange = (range: [number, number]) => {
    setRatingRange(range);
    setPage(1);
  };

  const handleYearRangeChange = (range: [number, number]) => {
    setYearRange(range);
    setPage(1);
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper', py: 2 }}>
        <Button
          variant="outlined"
          onClick={() => setIsFilterOpen(true)}
          sx={{ mb: 2 }}
        >
          Filters
        </Button>
        
        {selectedGenres.length > 0 && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            {selectedGenres.map(genre => (
              <Typography
                key={genre}
                variant="caption"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1
                }}
              >
                {genre}
              </Typography>
            ))}
          </Box>
        )}
      </Box>

      <FilterPanel
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        genres={allGenres}
        selectedGenres={selectedGenres}
        onGenreChange={handleGenreChange}
        tags={allTags}
        selectedTags={selectedTags}
        onTagChange={handleTagChange}
        ratingRange={ratingRange}
        onRatingRangeChange={handleRatingRangeChange}
        yearRange={yearRange}
        onYearRangeChange={handleYearRangeChange}
      />

      <Grid container spacing={3}>
        {displayedMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: theme.shadows[8]
                }
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={movie.imageUrl}
                alt={movie.title}
                onClick={() => onMovieClick(movie)}
                sx={{ cursor: 'pointer' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMovieForBooking(movie);
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
                <Typography variant="h6" gutterBottom>
                  {movie.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={movie.rating / 2} precision={0.5} readOnly size="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {movie.rating.toFixed(1)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                  {movie.genres.slice(0, 3).map((genre) => (
                    <Typography
                      key={genre}
                      variant="caption"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1
                      }}
                    >
                      {genre}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1
                }}
              >
                <IconButton
                  sx={{ bgcolor: 'background.paper' }}
                  onClick={() =>
                    user?.favorites.includes(movie.id)
                      ? removeFromFavorites(movie.id)
                      : addToFavorites(movie.id)
                  }
                >
                  {user?.favorites.includes(movie.id) ? (
                    <Favorite color="error" />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
                <IconButton
                  sx={{ bgcolor: 'background.paper' }}
                  onClick={() =>
                    user?.watchlist.includes(movie.id)
                      ? removeFromWatchlist(movie.id)
                      : addToWatchlist(movie.id)
                  }
                >
                  {user?.watchlist.includes(movie.id) ? (
                    <Bookmark color="primary" />
                  ) : (
                    <BookmarkBorder />
                  )}
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedMovieForBooking && (
        <BookingSystem
          movie={selectedMovieForBooking}
          open={true}
          onClose={() => setSelectedMovieForBooking(null)}
        />
      )}

      {hasMore && (
        <Box
          ref={ref}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 4
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default MovieGrid;
