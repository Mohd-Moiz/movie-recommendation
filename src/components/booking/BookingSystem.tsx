import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  Paper,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import { Movie } from '../../types';
import { useUser } from '../../contexts/UserContext';

interface BookingSystemProps {
  movie: Movie;
  open: boolean;
  onClose: () => void;
}

interface ShowTime {
  id: string;
  time: string;
  price: number;
  availableSeats: number;
}

const SHOWTIMES: ShowTime[] = [
  { id: '1', time: '10:00 AM', price: 10.99, availableSeats: 50 },
  { id: '2', time: '1:00 PM', price: 12.99, availableSeats: 45 },
  { id: '3', time: '4:00 PM', price: 14.99, availableSeats: 60 },
  { id: '4', time: '7:00 PM', price: 16.99, availableSeats: 55 },
  { id: '5', time: '10:00 PM', price: 14.99, availableSeats: 40 },
];

const BookingSystem: React.FC<BookingSystemProps> = ({ movie, open, onClose }) => {
  const { user } = useUser();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedSeats, setSelectedSeats] = useState<number>(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = () => {
    // In a real app, this would make an API call to process the booking
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      onClose();
    }, 2000);
  };

  const selectedShowTime = SHOWTIMES.find(st => st.id === selectedTime);
  const totalPrice = selectedShowTime ? selectedShowTime.price * selectedSeats * 83.33 : 0;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Book Tickets - {movie.title}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 2,
                  height: '100%',
                  backgroundImage: `url(${movie.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 300,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Movie Details
              </Typography>
              <Typography variant="body1" gutterBottom>
                {movie.description}
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {movie.genres.map((genre) => (
                  <Chip key={genre} label={genre} size="small" />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h6" gutterBottom>
          Select Show Time
        </Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {SHOWTIMES.map((showtime) => (
            <Grid item xs={12} sm={6} md={4} key={showtime.id}>
              <Paper
                sx={{
                  p: 2,
                  cursor: 'pointer',
                  bgcolor: selectedTime === showtime.id ? 'primary.main' : 'background.paper',
                  color: selectedTime === showtime.id ? 'white' : 'inherit',
                  '&:hover': {
                    bgcolor: selectedTime === showtime.id ? 'primary.dark' : 'action.hover',
                  },
                }}
                onClick={() => setSelectedTime(showtime.id)}
              >
                <Typography variant="h6">{showtime.time}</Typography>
                <Typography>Price: ₹{(showtime.price * 83.33).toFixed(2)}</Typography>
                <Typography>Available Seats: {showtime.availableSeats}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Number of Seats</InputLabel>
              <Select
                value={selectedSeats}
                label="Number of Seats"
                onChange={(e) => setSelectedSeats(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Total Price</Typography>
              <Typography variant="h4">₹{totalPrice.toFixed(2)}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          variant="contained" 
          onClick={handleBooking} 
          color="primary"
          disabled={!selectedTime}
        >
          Confirm Booking
        </Button>
      </DialogActions>
      {bookingSuccess && (
        <Alert severity="success" sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          Booking successful!
        </Alert>
      )}
    </Dialog>
  );
};

export default BookingSystem;
