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
  const translations = en.booking;
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
      total: movie.price * seats,
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

          <Box>
            <Typography variant="h6" align="right">
              <Typography>{translations.total}: ${movie.price * seats}</Typography>
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('booking.cancel')}</Button>
        <Button
          variant="contained"
          onClick={handleBooking}
          disabled={!date || !time || !name || !email || !phone}
        >
          {translations.confirm}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingDialog; 