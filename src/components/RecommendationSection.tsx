import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MovieCard from './MovieCard';
import { Movie } from '../types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`recommendation-tabpanel-${index}`}
      aria-labelledby={`recommendation-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

interface RecommendationSectionProps {
  userRatedMovies: Movie[];
  similarGenreMovies: Movie[];
  trendingMovies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  userRatedMovies,
  similarGenreMovies,
  trendingMovies,
  onMovieSelect,
}) => {
  const [tabValue, setTabValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const renderMovieGrid = (movies: Movie[]) => (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <MovieCard movie={movie} onSelect={() => onMovieSelect(movie)} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Recommended for You
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="movie recommendations tabs"
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons={isMobile ? "auto" : false}
        >
          <Tab label="Based on Your Ratings" />
          <Tab label="Similar Genres" />
          <Tab label="Trending" />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        {renderMovieGrid(userRatedMovies)}
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {renderMovieGrid(similarGenreMovies)}
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        {renderMovieGrid(trendingMovies)}
      </TabPanel>
    </Box>
  );
};

export default RecommendationSection;
