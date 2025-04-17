import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  Slider,
  Grid,
  Paper,
  IconButton,
  Chip,
  Divider,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CloseIcon from '@mui/icons-material/Close';
import { useLanguage } from '../contexts/LanguageContext';
import { en } from '../translations/en';
import { Movie } from '../types';

interface BookingDialogProps {
  open: boolean;
  onClose: () => void;
  movie: Movie;
}

const BookingDialog: React.FC<BookingDialogProps> = ({ open, onClose, movie }) => {
  const { t } = useLanguage();
  const translations = t('booking') as unknown as { [key: string]: string };
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const maxSeats = 10;

  const handleBooking = () => {
    console.log({
      movie: movie.title,
      date,
      time,
      seats,
      name,
      email,
      phone,
      total: movie.price * seats * 83.33, // Convert to INR
    });
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          bgcolor: 'background.paper',
        }
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Book Tickets - {movie.title}</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'grid', gap: 2, mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                src={movie.imageUrl}
                alt={movie.title}
                style={{ width: '100%', borderRadius: 8, objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {movie.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                {movie.genres.map((genre) => (
                  <Chip
                    key={genre}
                    label={genre}
                    size="small"
                    sx={{ mr: 0.5, mb: 0.5 }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </LocalizationProvider>

          <TextField
            label="Select Time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <Box sx={{ mt: 2 }}>
            <Typography gutterBottom>Number of Seats: {seats}</Typography>
            <Slider
              value={seats}
              onChange={(_, value) => setSeats(value as number)}
              min={1}
              max={maxSeats}
              step={1}
              marks
              valueLabelDisplay="auto"
            />
          </Box>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Personal Information
          </Typography>

          <TextField
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            required
          />

          <Paper elevation={0} sx={{ p: 2, mt: 2, bgcolor: 'background.default' }}>
            <Typography variant="h6" gutterBottom>
              Booking Summary
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Ticket Price:</Typography>
              <Typography>₹{(movie.price * 83.33).toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Number of Seats:</Typography>
              <Typography>{seats}</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" color="primary">
                ₹{(movie.price * seats * 83.33).toFixed(2)}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button 
          onClick={handleBooking} 
          variant="contained" 
          color="primary"
          disabled={!date || !time || !name || !email || !phone}
        >
          Confirm Booking
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingDialog; 