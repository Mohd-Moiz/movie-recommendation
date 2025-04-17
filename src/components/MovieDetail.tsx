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
  IconButton,
} from '@mui/material';
import { Movie } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

interface MovieDetailProps {
  movie: Movie | null;
  open: boolean;
  onClose: () => void;
  onBook: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, open, onClose, onBook }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (!movie) return null;

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  const handleBook = () => {
    onBook();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          bgcolor: 'background.paper',
        }
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{movie.title}</Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Chip
              label={movie.industry}
              color="primary"
              variant="outlined"
            />
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, gap: 3, mt: 2 }}>
          <Box>
            <img
              src={movie.imageUrl}
              alt={movie.title}
              style={{ width: '100%', borderRadius: 8, objectFit: 'cover' }}
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Rating: {movie.rating}/10
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
              Movie Insights
            </Typography>
            <Paper elevation={0} sx={{ p: 2, mb: 2, bgcolor: 'background.default' }}>
              <Typography variant="subtitle1" gutterBottom>
                Box Office: {movie.insights.boxOffice}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Awards:
              </Typography>
              <List dense>
                {movie.insights.awards.map((award, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={award} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="subtitle1" gutterBottom>
                Trivia:
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
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} color="inherit">
          Close
        </Button>
        <Button onClick={handleBook} variant="contained" color="primary">
          Book Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDetail; 