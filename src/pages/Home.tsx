import React, { useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import MovieGrid from '../components/movies/MovieGrid';
import { mockMovies } from '../data/mockMovies';
import { Movie } from '../types/Movie';
import SearchBar, { SearchCriteria } from '../components/SearchBar';

interface HomeProps {
  onMovieSelect: (movie: Movie) => void;
}

const Home: React.FC<HomeProps> = ({ onMovieSelect }) => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(mockMovies);

  const handleSearch = (searchTerm: string, criteria: SearchCriteria) => {
    const filtered = mockMovies.filter(movie => {
      const searchLower = searchTerm.toLowerCase();
      switch (criteria) {
        case 'title':
          return movie.title.toLowerCase().includes(searchLower);
        case 'actor':
          return movie.insights.cast.some(actor =>
            actor.name.toLowerCase().includes(searchLower)
          );
        case 'director':
          return movie.insights.crew.some(
            member =>
              member.role === 'Director' &&
              member.name.toLowerCase().includes(searchLower)
          );
        case 'genre':
          return movie.genres.some(genre =>
            genre.toLowerCase().includes(searchLower)
          );
        default:
          return true;
      }
    });
    setFilteredMovies(filtered);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: { xs: '60vh', sm: 0 } }}>
        <Box sx={{ mb: 4 }}>
          <SearchBar onSearch={handleSearch} />
        </Box>
        
        <MovieGrid
          movies={filteredMovies}
          onMovieClick={onMovieSelect}
        />
      </Box>
    </Container>
  );
};

export default Home;