import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Rating,
  useTheme,
  useMediaQuery,
  IconButton,
  CardActions,
  Button,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Bookmark as BookmarkIcon,
  Favorite as FavoriteIcon,
  CheckCircle as CheckCircleIcon,
  PlayArrow as PlayArrowIcon,
  Info as InfoIcon,
  LocalMovies as LocalMoviesIcon,
} from '@mui/icons-material';
import { Movie } from '../types/movie';
import { useLanguage } from '../contexts/LanguageContext';
import { useBag } from '../contexts/BagContext';
import { useNavigate } from 'react-router-dom';
import MoviePlayer from './MoviePlayer';
import MovieInsights from './MovieInsights';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useLanguage();
  const { addToWatchlist, addToFavorites, addToWatched } = useBag();
  const navigate = useNavigate();
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isTrailerMode, setIsTrailerMode] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    seats: 1,
    screen: '',
    snacks: [] as string[],
    paymentMethod: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const screens = ['Screen 1', 'Screen 2', 'Screen 3', 'Screen 4'];
  const availableTimes = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'];
  const snackOptions = [
    { name: 'Popcorn (Large)', price: 200 },
    { name: 'Coke (Large)', price: 100 },
    { name: 'Nachos', price: 150 },
    { name: 'Hot Dog', price: 180 },
  ];

  const handleAddToWatchlist = () => {
    addToWatchlist(movie);
  };

  const handleAddToFavorites = () => {
    addToFavorites(movie);
  };

  const handleMarkAsWatched = () => {
    addToWatched(movie);
  };

  const handleWatchTrailer = () => {
    setIsTrailerMode(true);
    setIsPlayerOpen(true);
  };

  const handleWatchMovie = () => {
    setIsTrailerMode(false);
    setIsPlayerOpen(true);
  };

  const handleDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  const handleBookTicket = () => {
    setIsBookingOpen(true);
  };

  const handleBookingClose = () => {
    setIsBookingOpen(false);
    setActiveStep(0);
    setBookingDetails({
      date: '',
      time: '',
      seats: 1,
      screen: '',
      snacks: [],
      paymentMethod: '',
    });
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleBookingSubmit = () => {
    // Here you would typically send the booking details to your backend
    console.log('Booking details:', { movie, ...bookingDetails });
    setShowSuccess(true);
    handleBookingClose();
  };

  const calculateTotal = () => {
    const moviePrice = movie.price * bookingDetails.seats;
    const snacksTotal = bookingDetails.snacks.reduce((total, snackName) => {
      const snack = snackOptions.find(s => s.name === snackName);
      return total + (snack?.price || 0);
    }, 0);
    return moviePrice + snacksTotal;
  };

  const steps = ['Select Date & Time', 'Choose Seats', 'Add Snacks', 'Payment'];

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                value={bookingDetails.date}
                onChange={(e) => setBookingDetails({ ...bookingDetails, date: e.target.value })}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Time</InputLabel>
                <Select
                  value={bookingDetails.time}
                  label="Time"
                  onChange={(e) => setBookingDetails({ ...bookingDetails, time: e.target.value })}
                >
                  {availableTimes.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Screen</InputLabel>
                <Select
                  value={bookingDetails.screen}
                  label="Screen"
                  onChange={(e) => setBookingDetails({ ...bookingDetails, screen: e.target.value })}
                >
                  {screens.map((screen) => (
                    <MenuItem key={screen} value={screen}>
                      {screen}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Number of Seats"
                value={bookingDetails.seats}
                onChange={(e) => setBookingDetails({ ...bookingDetails, seats: parseInt(e.target.value) })}
                inputProps={{ min: 1, max: 10 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Total Price: ₹{movie.price * bookingDetails.seats}
              </Typography>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            {snackOptions.map((snack) => (
              <Grid item xs={12} key={snack.name}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>{snack.name} - ₹{snack.price}</Typography>
                  <Button
                    variant={bookingDetails.snacks.includes(snack.name) ? 'contained' : 'outlined'}
                    onClick={() => {
                      const newSnacks = bookingDetails.snacks.includes(snack.name)
                        ? bookingDetails.snacks.filter(s => s !== snack.name)
                        : [...bookingDetails.snacks, snack.name];
                      setBookingDetails({ ...bookingDetails, snacks: newSnacks });
                    }}
                  >
                    {bookingDetails.snacks.includes(snack.name) ? 'Remove' : 'Add'}
                  </Button>
                </Box>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Snacks Total: ₹{bookingDetails.snacks.reduce((total, snackName) => {
                  const snack = snackOptions.find(s => s.name === snackName);
                  return total + (snack?.price || 0);
                }, 0)}
              </Typography>
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Payment Method</InputLabel>
                <Select
                  value={bookingDetails.paymentMethod}
                  label="Payment Method"
                  onChange={(e) => setBookingDetails({ ...bookingDetails, paymentMethod: e.target.value })}
                >
                  <MenuItem value="credit">Credit Card</MenuItem>
                  <MenuItem value="debit">Debit Card</MenuItem>
                  <MenuItem value="upi">UPI</MenuItem>
                  <MenuItem value="netbanking">Net Banking</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Typography>Movie: {movie.title}</Typography>
              <Typography>Date: {bookingDetails.date}</Typography>
              <Typography>Time: {bookingDetails.time}</Typography>
              <Typography>Screen: {bookingDetails.screen}</Typography>
              <Typography>Seats: {bookingDetails.seats}</Typography>
              <Typography>Snacks: {bookingDetails.snacks.join(', ') || 'None'}</Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Total Amount: ₹{calculateTotal()}
              </Typography>
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="300"
            image={movie.imageUrl}
            alt={movie.title}
            onClick={() => setIsInsightsOpen(true)}
            sx={{ 
              cursor: 'pointer',
              objectFit: 'cover',
              '&:hover': {
                opacity: 0.9,
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: 1,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {movie.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Rating
                value={movie.rating / 2}
                precision={0.5}
                readOnly
                size="small"
                sx={{ color: 'white' }}
              />
              <Typography
                variant="body2"
                sx={{ color: 'white', ml: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              >
                {movie.rating.toFixed(1)}
              </Typography>
            </Box>
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mb: 1 }}>
            {movie.genres.map((genre, index) => (
              <Chip
                key={index}
                label={genre}
                size="small"
                sx={{ mr: 0.5, mb: 0.5 }}
              />
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {movie.duration} • {movie.ageRating}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {movie.industry}
          </Typography>
        </CardContent>

        <CardActions sx={{ p: 2, pt: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Box>
              <Tooltip title="Add to Watchlist">
                <IconButton onClick={handleAddToWatchlist}>
                  <BookmarkIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add to Favorites">
                <IconButton onClick={handleAddToFavorites}>
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Mark as Watched">
                <IconButton onClick={handleMarkAsWatched}>
                  <CheckCircleIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip title="View Insights">
                <IconButton onClick={() => setIsInsightsOpen(true)}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardActions>

        <Box sx={{ p: 2, pt: 0 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleWatchTrailer}
            startIcon={<PlayArrowIcon />}
            sx={{ mb: 1 }}
          >
            Watch Trailer
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleWatchMovie}
            startIcon={<PlayArrowIcon />}
            sx={{ mb: 1 }}
          >
            Watch Movie (₹{movie.price})
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleBookTicket}
            startIcon={<LocalMoviesIcon />}
          >
            Book Tickets
          </Button>
        </Box>
      </Card>

      <MoviePlayer
        movie={movie}
        open={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
        isTrailer={isTrailerMode}
      />

      <Dialog
        open={isInsightsOpen}
        onClose={() => setIsInsightsOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Movie Insights - {movie.title}</DialogTitle>
        <DialogContent>
          <MovieInsights movie={movie} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsInsightsOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isBookingOpen} onClose={handleBookingClose} maxWidth="sm" fullWidth>
        <DialogTitle>Book Tickets for {movie.title}</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {renderStepContent(activeStep)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBookingClose}>Cancel</Button>
          {activeStep > 0 && (
            <Button onClick={handleBack}>Back</Button>
          )}
          {activeStep < steps.length - 1 ? (
            <Button onClick={handleNext} variant="contained">
              Next
            </Button>
          ) : (
          <Button onClick={handleBookingSubmit} variant="contained" color="primary">
              Confirm Booking
          </Button>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Booking confirmed successfully! Check your email for details.
        </Alert>
      </Snackbar>
    </>
  );
};

export default MovieCard; 