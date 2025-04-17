import React from 'react';
import { Movie } from '../../types';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Button,
  useTheme
} from '@mui/material';
import { useUser } from "../../contexts/UserContext";

interface MovieGridProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onMovieClick }) => {
  const theme = useTheme();
  const { user } = useUser();

  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.2s ease-in-out'
              }
            }}
            onClick={() => onMovieClick(movie)}
          >
            <CardMedia
              component="img"
              height="300"
              image={movie.imageUrl}
              alt={movie.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="div" noWrap>
                {movie.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={movie.rating / 2} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  {movie.rating.toFixed(1)}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" noWrap>
                {movie.genres.join(', ')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.releaseDate}
              </Typography>
              <Button 
                variant="contained" 
                fullWidth 
                sx={{ mt: 2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onMovieClick(movie);
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;
