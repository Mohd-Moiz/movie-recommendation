import React, { useState, useEffect, useRef } from 'react';
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
import { useWatchlist } from '../contexts/WatchlistContext';
import { useWatched } from '../contexts/WatchedContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { fetchMovieVideos, fetchMovieDetails, TmdbMovieDetails, TmdbVideo } from '../api';
import videojs, { VideoJsPlayer } from 'video.js';
import 'video.js/dist/video-js.css';

interface MovieDetailProps {
  movie: Movie | null;
  open: boolean;
  onClose: () => void;
  onBook: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, open, onClose, onBook }) => {
  const { t } = useLanguage();
  const [details, setDetails] = useState<TmdbMovieDetails | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [showTrailerDialog, setShowTrailerDialog] = useState(false);
  const [showPlayerDialog, setShowPlayerDialog] = useState(false);
  const [videoSource, setVideoSource] = useState<string | null>(null);
  const videoNode = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  // Watchlist, Watched, Favorites hooks
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const { watched, addToWatched, removeFromWatched } = useWatched();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isInWatchlist = watchlist.some((m) => m.id === movie?.id);
  const isWatched = watched.some((m) => m.id === movie?.id);
  const isFavorite = favorites.some((m) => m.id === movie?.id);

  useEffect(() => {
    let active = true;
    if (movie) {
      fetchMovieDetails(movie.id)
        .then((data: TmdbMovieDetails) => { if (active) setDetails(data); })
        .catch(console.error);
    }
    return () => { active = false; setDetails(null); };
  }, [movie]);

  const handleWatchTrailer = async () => {
    if (!movie) return;
    try {
      const videos = await fetchMovieVideos(movie.id);
      const trailer = videos.find((v: TmdbVideo) => v.site === 'YouTube' && v.type === 'Trailer');
      if (trailer) {
        setTrailerKey(trailer.key);
        setShowTrailerDialog(true);
      } else {
        alert(t('movie.watchTrailer') + ' not available');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to load trailer');
    }
  };

  const handleWatchMovie = async () => {
    if (!movie) return;
    try {
      const query = encodeURIComponent(movie.title);
      const searchUrl = `https://archive.org/advancedsearch.php?q=title%3A${query}+AND+mediatype%3Amovies&fl%5B%5D=identifier&sort%5B%5D=downloads+desc&rows=1&page=1&output=json`;
      const res = await fetch(searchUrl);
      const data = await res.json();
      const id = data.response.docs[0]?.identifier;
      if (!id) { alert('No streaming source found'); return; }
      const metaRes = await fetch(`https://archive.org/metadata/${id}`);
      const meta = await metaRes.json();
      const files = meta.files || [];
      const mp4 = files.find((f: any) => f.name.endsWith('.mp4'));
      const url = `https://archive.org/download/${id}/${mp4.name}`;
      setVideoSource(url);
      setShowPlayerDialog(true);
    } catch (err) { console.error(err); alert('Failed to load movie'); }
  };

  useEffect(() => {
    if (showPlayerDialog && videoNode.current) {
      playerRef.current = videojs(videoNode.current, { controls: true, fluid: true });
    }
    return () => {
      if (playerRef.current) { playerRef.current.dispose(); playerRef.current = null; }
    };
  }, [showPlayerDialog, videoSource]);

  if (!movie) return null;

  return (
    <>
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
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(movie.price)}
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
              {details && (
                <>
                  {details.tagline && (
                    <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }} paragraph>
                      {details.tagline}
                    </Typography>
                  )}
                  <Typography variant="subtitle2">
                    {t('movie.release')}: {details.release_date}
                  </Typography>
                  <Typography variant="subtitle2">
                    Runtime: {details.runtime} minutes
                  </Typography>
                  <Typography variant="subtitle2">
                    Revenue: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(details.revenue)}
                  </Typography>
                  <Typography variant="subtitle2">
                    Languages: {details.spoken_languages.map((lang) => lang.name).join(', ')}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                </>
              )}
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
          <Button variant="outlined" onClick={handleWatchTrailer}>
            {t('movie.watchTrailer')}
          </Button>
          <Button variant="contained" onClick={handleWatchMovie}>
            {t('movie.watchMovie')}
          </Button>
          <Button onClick={onClose}>{t('movie.close')}</Button>
          <Button variant="contained" onClick={onBook} color="primary">
            {t('movie.book')}
          </Button>
          {/* Movie list actions */}
          <Button
            variant={isInWatchlist ? 'contained' : 'outlined'}
            onClick={() => isInWatchlist ? removeFromWatchlist(movie.id) : addToWatchlist(movie)}
            sx={{ ml: 1 }}
          >
            {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </Button>
          <Button
            variant={isWatched ? 'contained' : 'outlined'}
            onClick={() => isWatched ? removeFromWatched(movie.id) : addToWatched(movie)}
            sx={{ ml: 1 }}
          >
            {isWatched ? 'Unmark Watched' : 'Mark as Watched'}
          </Button>
          <Button
            variant={isFavorite ? 'contained' : 'outlined'}
            onClick={() => isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie)}
            sx={{ ml: 1 }}
          >
            {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
          </Button>
        </DialogActions>
      </Dialog>
      {/* Embedded YouTube Trailer Dialog */}
      <Dialog open={showTrailerDialog} onClose={() => setShowTrailerDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>{t('movie.watchTrailer')}</DialogTitle>
        <DialogContent>
          <Box sx={{ position: 'relative', pt: '56.25%' }}>
            {trailerKey && (
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&modestbranding=1`}
                title="Trailer"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: 8 }}
              />
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowTrailerDialog(false)}>{t('movie.close')}</Button>
        </DialogActions>
      </Dialog>
      {/* Video.js Player Dialog */}
      <Dialog open={showPlayerDialog} onClose={() => { setShowPlayerDialog(false); setVideoSource(null); }} maxWidth="md" fullWidth>
        <DialogTitle>{movie.title}</DialogTitle>
        <DialogContent>
          <video ref={videoNode} className="video-js vjs-big-play-centered" controls preload="auto" style={{ width: '100%' }}>
            {videoSource && <source src={videoSource} type="video/mp4" />}
          </video>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setShowPlayerDialog(false); setVideoSource(null); }}>{t('movie.close')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MovieDetail;