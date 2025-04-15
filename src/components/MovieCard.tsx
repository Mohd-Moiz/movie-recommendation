import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Rating,
  useTheme,
} from '@mui/material';
import { Movie } from '../types/Movie';
import { useLanguage } from '../contexts/LanguageContext';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Card
      onClick={onClick}
      sx={{
        position: 'relative',
        cursor: 'pointer',
        height: 400,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={movie.imageUrl}
        alt={movie.title}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          color: 'white',
          padding: 2,
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          {movie.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Rating
            value={movie.rating / 2}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="body2" color="text.secondary">
            ({movie.rating}/10)
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.5,
            mt: 1,
          }}
        >
          {movie.genres.map((genre, index) => (
            <Chip
              key={index}
              label={genre}
              size="small"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
              }}
            />
          ))}
        </Box>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {movie.industry}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard; 