import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { BagContext } from '../contexts/BagContext';
import { Movie } from '../types';
import { getMovieById } from '../services/movieService';

const UserBagList: React.FC = () => {
  const { t } = useTranslation();
  const bagContext = useContext(BagContext);
  const [movies, setMovies] = useState<{ [key: number]: Movie }>({});

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovieIds = [...bagContext.bag.watchlist, ...bagContext.bag.favorites, ...bagContext.bag.watched];
      const uniqueMovieIds = Array.from(new Set(allMovieIds));
      
      const moviePromises = uniqueMovieIds.map(id => getMovieById(id));
      const movieResults = await Promise.all(moviePromises);
      
      const movieMap = movieResults.reduce((acc, movie) => {
        if (movie) acc[movie.id] = movie;
        return acc;
      }, {} as { [key: number]: Movie });
      
      setMovies(movieMap);
    };

    fetchMovies();
  }, [bagContext.bag]);

  const renderMovieList = (movieIds: number[], onRemove: (id: number) => void) => (
    <List>
      {movieIds.map(id => {
        const movie = movies[id];
        if (!movie) return null;
        
        return (
          <ListItem key={id}>
            <ListItemText
              primary={movie.title}
              secondary={movie.description}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => onRemove(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        {t('userBag.title')}
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        {t('userBag.watchlist')}
      </Typography>
      {renderMovieList(bagContext.bag.watchlist, bagContext.removeFromWatchlist)}
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="h6" gutterBottom>
        {t('userBag.favorites')}
      </Typography>
      {renderMovieList(bagContext.bag.favorites, bagContext.removeFromFavorites)}
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="h6" gutterBottom>
        {t('userBag.watched')}
      </Typography>
      {renderMovieList(bagContext.bag.watched, bagContext.removeFromWatched)}
    </Box>
  );
};

export default UserBagList; 