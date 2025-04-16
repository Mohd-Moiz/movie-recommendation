import React, { useEffect, useState } from 'react';
import { Movie, UserProfile } from '../../types';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Rating
} from '@mui/material';

interface MovieRecommendationsProps {
  currentUser: UserProfile;
  movies: Movie[];
}

const MovieRecommendations: React.FC<MovieRecommendationsProps> = ({
  currentUser,
  movies
}) => {
  const [recommendations, setRecommendations] = useState<Movie[]>([]);

  useEffect(() => {
    // Collaborative Filtering Algorithm
    const getRecommendations = () => {
      // 1. Get user's favorite genres
      const userGenres = currentUser.preferences.favoriteGenres;

      // 2. Get user's ratings
      const userRatings = new Map(
        currentUser.reviews.map((review) => [review.movieId, review.rating])
      );

      // 3. Calculate genre preferences
      const genreScores = new Map<string, number>();
      userRatings.forEach((rating, movieId) => {
        const movie = movies.find((m) => m.id === movieId);
        if (movie) {
          movie.genres.forEach((genre) => {
            const currentScore = genreScores.get(genre) || 0;
            genreScores.set(genre, currentScore + rating);
          });
        }
      });

      // 4. Score unwatched movies
      const unwatchedMovies = movies.filter(
        (movie) => !userRatings.has(movie.id)
      );

      const scoredMovies = unwatchedMovies.map((movie) => {
        let score = 0;
        
        // Genre match score
        movie.genres.forEach((genre) => {
          if (userGenres.includes(genre)) {
            score += 2;
          }
          score += (genreScores.get(genre) || 0) / 10;
        });

        // Popularity score
        score += movie.popularity / 20;

        // Rating score
        score += movie.rating / 2;

        return { movie, score };
      });

      // 5. Sort by score and return top recommendations
      return scoredMovies
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
        .map((item) => item.movie);
    };

    const recommendedMovies = getRecommendations();
    setRecommendations(recommendedMovies);
  }, [currentUser, movies]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Recommended for You
      </Typography>
      <Grid container spacing={3}>
        {recommendations.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={movie.imageUrl}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {movie.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1
                  }}
                >
                  <Rating value={movie.rating / 2} precision={0.5} readOnly />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {movie.rating.toFixed(1)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {movie.genres.map((genre) => (
                    <Typography
                      key={genre}
                      variant="caption"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1
                      }}
                    >
                      {genre}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieRecommendations;
