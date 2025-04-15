import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Home from './pages/Home';
import { Movie } from './types/Movie';
import BookingDialog from './components/BookingDialog';

const App: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookMovie = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <Router>
      <ThemeContextProvider>
        <LanguageProvider>
          <AuthProvider>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100%',
                overflowX: 'hidden',
              }}
            >
              <Header />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  maxWidth: '100%',
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 2, sm: 3 },
                }}
              >
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home onMovieSelect={setSelectedMovie} />
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Box>
              <Footer />
              <MovieDetail
                movie={selectedMovie}
                open={Boolean(selectedMovie)}
                onClose={() => setSelectedMovie(null)}
                onBook={handleBookMovie}
              />
              {selectedMovie && (
                <BookingDialog
                  open={isBookingOpen}
                  onClose={handleCloseBooking}
                  movie={selectedMovie}
                />
              )}
            </Box>
          </AuthProvider>
        </LanguageProvider>
      </ThemeContextProvider>
    </Router>
  );
};

export default App;
