import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Rating,
  Chip,
  Avatar,
  Stack,
} from '@mui/material';
import { Movie } from '../types/movie';

interface MovieInsightsProps {
  movie: Movie;
}

const MovieInsights: React.FC<MovieInsightsProps> = ({ movie }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        {/* Movie Overview */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={movie.rating / 2} precision={0.5} readOnly />
              <Typography variant="body1" sx={{ ml: 1 }}>
                {movie.rating.toFixed(1)}/10
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              {movie.description}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              {movie.genres.map((genre, index) => (
                <Chip key={index} label={genre} color="primary" variant="outlined" />
              ))}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {movie.duration} • {movie.ageRating} • {movie.industry}
            </Typography>
          </Paper>
        </Grid>

        {/* Box Office & Awards */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Box Office & Awards
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Box Office Collection"
                  secondary={movie.insights.boxOffice}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Release Date"
                  secondary={movie.releaseDate}
                />
              </ListItem>
              <Divider />
              {movie.insights.awards.map((award, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText primary={award} />
                  </ListItem>
                  {index < movie.insights.awards.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Trivia & Fun Facts */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Trivia & Fun Facts
            </Typography>
            <List>
              {movie.insights.trivia.map((trivia, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText primary={trivia} />
                  </ListItem>
                  {index < movie.insights.trivia.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Cast */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Cast
            </Typography>
            <List>
              {movie.insights.cast.map((member, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <Avatar sx={{ mr: 2 }}>{member.name.charAt(0)}</Avatar>
                    <ListItemText
                      primary={member.name}
                      secondary={member.role}
                    />
                  </ListItem>
                  {index < movie.insights.cast.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Crew */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Crew
            </Typography>
            <List>
              {movie.insights.crew.map((member, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <Avatar sx={{ mr: 2 }}>{member.name.charAt(0)}</Avatar>
                    <ListItemText
                      primary={member.name}
                      secondary={member.role}
                    />
                  </ListItem>
                  {index < movie.insights.crew.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Reviews */}
        {movie.reviews && movie.reviews.length > 0 && (
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Reviews
              </Typography>
              <List>
                {movie.reviews.map((review, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ mr: 1 }}>
                              {review.userId}
                            </Typography>
                            <Rating value={review.rating} readOnly size="small" />
                          </Box>
                        }
                        secondary={review.comment}
                      />
                    </ListItem>
                    {index < movie.reviews.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default MovieInsights; 