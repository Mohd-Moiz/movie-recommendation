import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import { useBag } from '../contexts/BagContext';
import { Movie } from '../types/UserBag';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

export function UserBag() {
  const { bag, dispatch } = useBag();

  const handleRemoveFromWatchlist = (movie: Movie) => {
    dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movie });
  };

  const handleRemoveFromFavorites = (movie: Movie) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: movie });
  };

  const handleRemoveFromWatched = (movie: Movie) => {
    dispatch({ type: 'REMOVE_FROM_WATCHED', payload: movie });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        My Movie Collections
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Watchlist <BookmarkIcon />
        </Typography>
        <List>
          {bag.watchlist.map((movie: Movie) => (
            <ListItem
              key={movie.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleRemoveFromWatchlist(movie)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={movie.title} secondary={movie.overview} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Favorites <FavoriteIcon />
        </Typography>
        <List>
          {bag.favorites.map((movie: Movie) => (
            <ListItem
              key={movie.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleRemoveFromFavorites(movie)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={movie.title} secondary={movie.overview} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6" gutterBottom>
          Watched <VisibilityIcon />
        </Typography>
        <List>
          {bag.watched.map((movie: Movie) => (
            <ListItem
              key={movie.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleRemoveFromWatched(movie)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={movie.title} secondary={movie.overview} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
} 