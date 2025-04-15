import React, { useState } from 'react';
import {
  Container,
  TextField,
  Box,
  Typography,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import MovieCard from '../components/MovieCard';
import { mockMovies } from '../data/mockMovies';
import { useLanguage } from '../contexts/LanguageContext';
import { Movie } from '../types/Movie';

interface HomeProps {
  onMovieSelect: (movie: Movie) => void;
}

const Home: React.FC<HomeProps> = ({ onMovieSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  const filteredMovies = mockMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('home.title')}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          {t('home.subtitle')}
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder={t('home.search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 3,
        }}
      >
        {filteredMovies.map((movie) => (
          <Box key={movie.id}>
            <MovieCard
              movie={movie}
              onClick={() => onMovieSelect(movie)}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Home; 