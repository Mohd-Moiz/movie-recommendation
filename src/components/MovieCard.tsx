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
  useMediaQuery,
} from '@mui/material';
import { Movie } from '../types/Movie';
import { useLanguage } from '../contexts/LanguageContext';

interface MovieCardProps {
  movie: Movie;
  onSelect: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onSelect }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useLanguage();

  return (
    <Card
      onClick={onSelect}
      sx={{
        position: 'relative',
        cursor: 'pointer',
        height: { xs: 300, sm: 350, md: 400 },
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
          padding: { xs: 1.5, sm: 2 },
        }}
      >
        <Typography 
          variant={isMobile ? "subtitle1" : "h6"} 
          component="div" 
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: { xs: 0.5, sm: 1 },
          }}
        >
          {movie.title}
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          mb: { xs: 0.5, sm: 1 },
        }}>
          <Rating
            value={movie.rating / 2}
            precision={0.5}
            readOnly
            size={isMobile ? "small" : "medium"}
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
            mt: { xs: 0.5, sm: 1 },
          }}
        >
          {movie.genres.map((genre, index) => (
            <Chip
              key={index}
              label={genre}
              size={isMobile ? "small" : "medium"}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
              }}
            />
          ))}
        </Box>
        <Typography 
          variant="body2" 
          sx={{ 
            mt: { xs: 0.5, sm: 1 },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          {movie.industry}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard; 