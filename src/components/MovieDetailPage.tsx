import React, { useState, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Rating,
  Paper,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Movie, Review } from '../types/Movie';
import { useLanguage } from '../contexts/LanguageContext';
import ReviewSection from './ReviewSection';

interface MovieDetailPageProps {
  movie: Movie;
  similarMovies: Movie[];
  currentUserId: string;
  onUserRating: (rating: number) => void;
  onAddReview: (movieId: number, rating: number, comment: string) => void;
  onEditReview: (movieId: number, reviewId: string, rating: number, comment: string) => void;
  onDeleteReview: (movieId: number, reviewId: string) => void;
  onLikeReview: (movieId: number, reviewId: string) => void;
}

const MovieDetailPage: React.FC<MovieDetailPageProps> = ({
  movie,
  similarMovies,
  currentUserId,
  onUserRating,
  onAddReview,
  onEditReview,
  onDeleteReview,
  onLikeReview,
}) => {
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [userRating, setUserRating] = useState<number | null>(movie.userRating || null);

  const handleRatingChange = (event: React.ChangeEvent<{}>, value: number | null) => {
    if (value !== null) {
      setUserRating(value);
      onUserRating(value);
    }
  };

  const renderTrailer = () => {
    if (!movie.trailerUrl) return null;
    
    const videoId = new URL(movie.trailerUrl).searchParams.get('v');
    if (!videoId) return null;

    return (
      <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 4 }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${movie.title} trailer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column - Poster and Basic Info */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Box
              component="img"
              src={movie.imageUrl}
              alt={movie.title}
              sx={{
                width: '100%',
                borderRadius: 1,
                mb: 2,
              }}
            />
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Box sx={{ mb: 2 }}>
              {movie.genres.map((genre) => (
                <Chip
                  key={genre}
                  label={genre}
                  size="small"
                  sx={{ mr: 0.5, mb: 0.5 }}
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography component="span" mr={1}>
                Average Rating:
              </Typography>
              <Rating value={movie.rating} readOnly precision={0.5} />
              <Typography component="span" ml={1}>
                ({movie.rating})
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography component="span" mr={1}>
                Your Rating:
              </Typography>
              <Rating
                value={userRating}
                onChange={handleRatingChange}
                precision={0.5}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Right Column - Details */}
        <Grid item xs={12} md={8}>
          {renderTrailer()}
          
          <Typography variant="h6" gutterBottom>
            Synopsis
          </Typography>
          <Typography paragraph>{movie.description}</Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Cast
          </Typography>
          <List>
            {movie.insights.cast.map((member, index) => (
              <React.Fragment key={`${member.name}-${member.role}`}>
                {index > 0 && <Divider variant="inset" component="li" />}
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={member.imageUrl} alt={member.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={member.name}
                    secondary={member.role}
                  />
                </ListItem>
              </React.Fragment>
            ))}
          </List>

          {/* Additional Movie Details */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Movie Details
            </Typography>
            <Typography>Release Date: {movie.releaseDate}</Typography>
            <Typography>Box Office: {movie.insights.boxOffice}</Typography>
            {movie.insights.awards.length > 0 && (
              <>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  Awards
                </Typography>
                <List dense>
                  {movie.insights.awards.map((award, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={award} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Box>

          {/* Reviews Section */}
          <ReviewSection
            movieId={movie.id}
            reviews={movie.reviews}
            userRating={movie.userRating}
            currentUserId={currentUserId}
            onAddReview={(rating: number, comment: string) => onAddReview(movie.id, rating, comment)}
            onEditReview={(reviewId: string, rating: number, comment: string) => onEditReview(movie.id, reviewId, rating, comment)}
            onDeleteReview={(reviewId: string) => onDeleteReview(movie.id, reviewId)}
            onLikeReview={(reviewId: string) => onLikeReview(movie.id, reviewId)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetailPage;
