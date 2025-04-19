import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
  CircularProgress,
  Alert,
  Tooltip,
  IconButton,
  Collapse,
} from '@mui/material';
import { MovieRecommendation, getRecommendations } from '../services/movieService';
import { useUserPreferences } from '../contexts/UserPreferencesContext';
import { useAuth } from '../contexts/AuthContext';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Recommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<MovieRecommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedMovie, setExpandedMovie] = useState<number | null>(null);
  const { preferences } = useUserPreferences();
  const { user } = useAuth();

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        if (!user) {
          setError('Please sign in to get personalized recommendations');
          return;
        }

        const recs = await getRecommendations(user.uid, preferences);
        setRecommendations(recs);
      } catch (err) {
        setError('Failed to fetch recommendations. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [user, preferences]);

  const handleExpandClick = (movieId: number) => {
    setExpandedMovie(expandedMovie === movieId ? null : movieId);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (recommendations.length === 0) {
    return (
      <Box p={3}>
        <Typography variant="h5" gutterBottom>
          No recommendations yet
        </Typography>
        <Typography>
          Start by adding some movies to your favorites and rating movies to get personalized recommendations.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Your Personalized Recommendations
      </Typography>
      <Grid container spacing={3}>
        {recommendations.map(({ movie, score, reason }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="300"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {movie.title}
                  </Typography>
                  <Tooltip title="Recommendation Details">
                    <IconButton
                      onClick={() => handleExpandClick(movie.id)}
                      aria-expanded={expandedMovie === movie.id}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon
                        sx={{
                          transform: expandedMovie === movie.id ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.3s'
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box mb={1}>
                  <Rating value={movie.vote_average / 2} precision={0.5} readOnly />
                  <Typography variant="body2" color="text.secondary">
                    ({movie.vote_average}/10)
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                  {movie.genres.map((genre) => (
                    <Chip
                      key={genre}
                      label={genre}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Collapse in={expandedMovie === movie.id} timeout="auto" unmountOnExit>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {movie.overview}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Recommendation Score: {score.toFixed(1)}
                    </Typography>
                    <Typography variant="caption" display="block" color="text.secondary">
                      {reason}
                    </Typography>
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Recommendations; 