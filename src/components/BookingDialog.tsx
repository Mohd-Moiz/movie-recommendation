import React, { useState, useEffect } from 'react';
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
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useLanguage } from '../contexts/LanguageContext';

interface BookingDialogProps {
  open: boolean;
  onClose: () => void;
  movie: {
    title: string;
    price: number;
  };
}

const BookingDialog: React.FC<BookingDialogProps> = ({ open, onClose, movie }) => {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingData, setBookingData] = useState<{
    movie: string;
    date: Date | null;
    time: string;
    seats: number;
    name: string;
    email: string;
    phone: string;
    total: number;
  } | null>(null);
  const [ticketInfo, setTicketInfo] = useState<{
    movie: string;
    date: Date | null;
    time: string;
    seats: number;
    name: string;
    email: string;
    phone: string;
    total: number;
  } | null>(null);
  const maxSeats = 10;

  const steps = [t('booking.details'), t('booking.payment'), t('booking.success')];
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);
  const handleClose = () => { setActiveStep(0); setTicketInfo(null); setBookingData(null); onClose(); };
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('upi');

  const handlePaymentSuccess = () => {
    if (!bookingData) return;
    setTicketInfo(bookingData);
    setBookingData(null);
    handleNext();
  };

  useEffect(() => {
    if (bookingData) {
      const timer = setTimeout(() => {
        handlePaymentSuccess();
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [bookingData]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{movie.title}</DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
          {steps.map(label => (
            <Step key={label}><StepLabel>{label}</StepLabel></Step>
          ))}
        </Stepper>
        <Box>
          {activeStep === 0 && (
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Booking Details
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label={t('booking.date')}
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                        slotProps={{ textField: { fullWidth: true } }}
                      />
                    </LocalizationProvider>
                    <TextField
                      label={t('booking.time')}
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ step: 300 }}
                      fullWidth
                      sx={{ mt: 2 }}
                    />
                    <Box sx={{ mt: 2 }}>
                      <Typography gutterBottom>{t('booking.seats')}</Typography>
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
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Personal Information
                    </Typography>
                    <TextField
                      label={t('booking.name')}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      label={t('booking.email')}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      label={t('booking.phone')}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      fullWidth
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={1} sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">{t('booking.total')}</Typography>
                    <Typography variant="h6">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(movie.price * seats)}</Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Button variant="contained" onClick={handleNext}>{t('booking.next')}</Button>
            </Box>
          )}
          {activeStep === 1 && (
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="subtitle1">{t('booking.payment')}</Typography>
              <Typography variant="h6">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(movie.price * seats)}</Typography>
              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <FormLabel component="legend">Payment Method</FormLabel>
                <RadioGroup row value={paymentMethod} onChange={e => setPaymentMethod(e.target.value as 'card' | 'upi')}>
                  <FormControlLabel value="card" control={<Radio />} label="Card" />
                  <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                </RadioGroup>
              </FormControl>
              {paymentMethod === 'card' ? (
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField label="Card Number" placeholder="XXXX XXXX XXXX XXXX" fullWidth />
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField label="Expiry" placeholder="MM/YY" fullWidth />
                    <TextField label="CVV" placeholder="XXX" fullWidth />
                  </Box>
                  <Button variant="contained" onClick={handlePaymentSuccess}>Pay with Card</Button>
                </Box>
              ) : (
                <Box sx={{ mt: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box component="img" src="/upiscan.jpg" alt="UPI QR Code" sx={{ width: 150, height: 150, objectFit: 'cover' }} />
                  <Button variant="contained" onClick={handlePaymentSuccess}>I Have Paid</Button>
                </Box>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
                <Button onClick={handleBack}>{t('booking.back')}</Button>
              </Box>
            </Box>
          )}
          {activeStep === 2 && (
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="h6">{ticketInfo?.movie}</Typography>
              <Typography>Date: {ticketInfo?.date?.toLocaleDateString()}</Typography>
              <Typography>Time: {ticketInfo?.time}</Typography>
              <Typography>Seats: {ticketInfo?.seats}</Typography>
              <Typography>Name: {ticketInfo?.name}</Typography>
              <Typography>Email: {ticketInfo?.email}</Typography>
              <Typography>Phone: {ticketInfo?.phone}</Typography>
              <Typography>Total Paid: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(ticketInfo!.total)}</Typography>
              <Button variant="contained" onClick={handleClose}>{t('booking.close')}</Button>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: 'none' }} />
    </Dialog>
  );
};

export default BookingDialog;