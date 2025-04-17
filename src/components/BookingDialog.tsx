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
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useLanguage } from '../contexts/LanguageContext';
import { en } from '../translations/en';
import { Movie } from '../types/Movie';

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
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {translations.title} - {movie.title}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'grid', gap: 2, mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                src={movie.imageUrl}
                alt={movie.title}
                style={{ width: '100%', borderRadius: 8 }}
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
            </Grid>
          </Grid>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={translations.date}
              value={date}
              onChange={(newValue) => setDate(newValue)}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </LocalizationProvider>

          <TextField
            label={translations.time}
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            fullWidth
          />

          <Box>
            <Typography gutterBottom>{translations.seats}</Typography>
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

          <TextField
            label={translations.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <TextField
            label={translations.email}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />

          <TextField
            label={translations.phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />

          <Paper sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Booking Summary
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2">Base Price:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" align="right">₹{(movie.price * 83.33).toFixed(2)}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">Number of Seats:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" align="right">{seats}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Total Price:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" align="right">₹{(movie.price * seats * 83.33).toFixed(2)}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleBooking} color="primary">
          Confirm Booking
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingDialog; 