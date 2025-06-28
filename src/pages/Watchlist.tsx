import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useWatchlist } from '../contexts/WatchlistContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Movie } from '../types/Movie';

const WatchlistPage: React.FC = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (watchlist.length === 0) {
    return (
      <Container maxWidth="md" sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant={isMobile ? 'h5' : 'h4'}>{t('watchlist.empty')}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
      <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom>
        {t('nav.watchlist')}
      </Typography>
      <Grid container spacing={3}>
        {watchlist.map((movie: Movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                image={movie.imageUrl}
                alt={movie.title}
                sx={{ height: 0, paddingTop: '150%' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`${movie.rating}/10`}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(movie.price)}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small" color="error" onClick={() => removeFromWatchlist(movie.id)}>
                  {t('watchlist.remove')}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WatchlistPage; 