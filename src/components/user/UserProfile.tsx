import React from 'react';
import { useUser } from '../../contexts/UserContext';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
  Chip,
  Rating,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';
import { Movie } from '../../types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const UserProfile: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  const { user, watchlist, favorites } = useUser();
  const [tabValue, setTabValue] = React.useState(0);

  if (!user) return null;

  const watchedMovies = movies.filter((movie) =>
    user.watchHistory.includes(movie.id)
  );
  const userReviews = user.reviews.map((review) => ({
    ...review,
    movie: movies.find((m) => m.id === review.movieId)
  }));

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Profile
            </Typography>
            <Typography>{user.username}</Typography>
            <Typography color="textSecondary">{user.email}</Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1">Favorite Genres</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {user.preferences.favoriteGenres.map((genre) => (
                  <Chip key={genre} label={genre} size="small" />
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ width: '100%' }}>
            <Tabs
              value={tabValue}
              onChange={(_, newValue) => setTabValue(newValue)}
              variant="fullWidth"
            >
              <Tab label="Watchlist" />
              <Tab label="Favorites" />
              <Tab label="Watch History" />
              <Tab label="Reviews" />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              <Grid container spacing={2}>
                {watchlist.map((movie) => (
                  <Grid item xs={12} sm={6} md={4} key={movie.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={movie.imageUrl}
                        alt={movie.title}
                      />
                      <CardContent>
                        <Typography variant="h6">{movie.title}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <Grid container spacing={2}>
                {favorites.map((movie) => (
                  <Grid item xs={12} sm={6} md={4} key={movie.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={movie.imageUrl}
                        alt={movie.title}
                      />
                      <CardContent>
                        <Typography variant="h6">{movie.title}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <List>
                {watchedMovies.map((movie) => (
                  <ListItem key={movie.id}>
                    <ListItemText
                      primary={movie.title}
                      secondary={`Watched on ${new Date().toLocaleDateString()}`}
                    />
                  </ListItem>
                ))}
              </List>
            </TabPanel>

            <TabPanel value={tabValue} index={3}>
              {userReviews.map(
                (review) =>
                  review.movie && (
                    <Paper key={review.movieId} sx={{ p: 2, mb: 2 }}>
                      <Typography variant="h6">{review.movie.title}</Typography>
                      <Rating value={review.rating} readOnly />
                      <Typography>{review.comment}</Typography>
                      <Typography variant="caption" color="textSecondary">
                        Posted on {new Date(review.timestamp).toLocaleDateString()}
                      </Typography>
                    </Paper>
                  )
              )}
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;
