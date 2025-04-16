import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import { Movie } from '../types/Movie';
import { useLanguage } from '../contexts/LanguageContext';

interface MovieDetailProps {
  movie: Movie | null;
  open: boolean;
  onClose: () => void;
  onBook: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, open, onClose, onBook }) => {
  const { t } = useLanguage();

  if (!movie) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{movie.title}</Typography>
          <Chip
            label={movie.industry}
            color="primary"
            variant="outlined"
            sx={{ ml: 2 }}
          />
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 3, mt: 2 }}>
          <Box>
            <img
              src={movie.imageUrl}
              alt={movie.title}
              style={{ width: '100%', borderRadius: 8 }}
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                {t('movie.rating')}: {movie.rating}/10
              </Typography>
              <Typography variant="h6" color="primary">
                ₹{(movie.price * 83.33).toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1" paragraph>
              {movie.description}
            </Typography>
            <Box sx={{ mb: 2 }}>
              {movie.genres.map((genre) => (
                <Chip
                  key={genre}
                  label={genre}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              {t('movie.insights')}
            </Typography>
            <Paper elevation={0} sx={{ p: 2, mb: 2, bgcolor: 'background.default' }}>
              <Typography variant="subtitle1" gutterBottom>
                {t('movie.boxOffice')}: {movie.insights.boxOffice}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {t('movie.awards')}:
              </Typography>
              <List dense>
                {movie.insights.awards.map((award, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={award} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="subtitle1" gutterBottom>
                {t('movie.trivia')}:
              </Typography>
              <List dense>
                {movie.insights.trivia.map((fact, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={fact} />
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  {t('movie.cast')}
                </Typography>
                <List dense>
                  {movie.insights.cast.map((member, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={member.name}
                        secondary={member.role}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  {t('movie.crew')}
                </Typography>
                <List dense>
                  {movie.insights.crew.map((member, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={member.name}
                        secondary={member.role}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('movie.close')}</Button>
        <Button variant="contained" onClick={onBook} color="primary">
          {t('movie.book')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDetail; 