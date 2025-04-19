import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  CircularProgress,
  Button,
  DialogActions,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Movie } from '../types/movie';
import { getStreamingUrl } from '../services/movieService';

interface MoviePlayerProps {
  movie: Movie;
  open: boolean;
  onClose: () => void;
  isTrailer?: boolean;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ movie, open, onClose, isTrailer = true }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [streamingUrl, setStreamingUrl] = useState<string>('');

  React.useEffect(() => {
    const fetchStreamingUrl = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = await getStreamingUrl(movie.title);
        setStreamingUrl(url);
      } catch (err) {
        console.error('Error fetching streaming URL:', err);
        setError('Failed to load video. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (open) {
      fetchStreamingUrl();
    }
  }, [open, movie.title]);

  const handleClose = () => {
    setStreamingUrl('');
    setError(null);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'black',
          color: 'white',
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {loading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '400px',
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '400px',
              p: 3,
            }}
          >
            <Typography variant="h6" color="error" gutterBottom>
              {error}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </Box>
        )}

        {!loading && !error && streamingUrl && (
          <Box
            sx={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio
            }}
          >
            <iframe
              src={streamingUrl}
              title={`${movie.title} ${isTrailer ? 'Trailer' : 'Movie'}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2, bgcolor: 'black' }}>
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          {movie.title} - {isTrailer ? 'Trailer' : 'Full Movie'}
        </Typography>
        <Button onClick={handleClose} sx={{ color: 'white' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MoviePlayer; 