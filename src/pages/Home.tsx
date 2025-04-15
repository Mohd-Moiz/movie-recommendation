import React, { useState } from 'react';
import {
  Container,
  TextField,
  Box,
  Typography,
  InputAdornment,
  useTheme,
  useMediaQuery,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredMovies = mockMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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