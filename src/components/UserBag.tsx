import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Tabs,
  Tab,
  CircularProgress,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useBag } from '../contexts/BagContext';
import { Movie } from '../types/movie';

const UserBag: React.FC = () => {
  const { bag, removeFromWatchlist, removeFromFavorites, removeFromWatched } = useBag();
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleRemoveFromWatchlist = (movie: Movie) => {
    removeFromWatchlist(movie);
  };

  const handleRemoveFromFavorites = (movie: Movie) => {
    removeFromFavorites(movie);
  };

  const handleRemoveFromWatched = (movie: Movie) => {
    removeFromWatched(movie);
  };

  const renderMovieList = (movies: Movie[], onRemove: (movie: Movie) => void) => {
    if (loading) {
      return (
        <Box display="flex" justifyContent="center" p={3}>
          <CircularProgress />
        </Box>
      );
    }

    if (movies.length === 0) {
      return (
        <Box p={3}>
          <Typography variant="body1" color="textSecondary">
            No movies in this list
          </Typography>
        </Box>
      );
    }

    return (
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id}>
            <ListItemText
              primary={movie.title}
              secondary={movie.description}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onRemove(movie)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Movie Lists
      </Typography>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Watchlist" />
        <Tab label="Favorites" />
        <Tab label="Watched" />
      </Tabs>
      <Box mt={2}>
        {activeTab === 0 && renderMovieList(bag.watchlist, handleRemoveFromWatchlist)}
        {activeTab === 1 && renderMovieList(bag.favorites, handleRemoveFromFavorites)}
        {activeTab === 2 && renderMovieList(bag.watched, handleRemoveFromWatched)}
      </Box>
    </Box>
  );
};

export default UserBag; 