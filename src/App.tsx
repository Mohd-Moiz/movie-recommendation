import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { UserProvider } from './contexts/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Home from './pages/Home';
import { Movie } from './types';
import BookingDialog from './components/BookingDialog';
import { BagProvider } from './contexts/BagContext';
import { UserBag } from './components/UserBag';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookMovie = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <ThemeContextProvider>
      <CssBaseline />
      <LanguageProvider>
        <BagProvider>
          <AuthProvider>
            <UserProvider>
              <Router>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    width: '100%',
                    overflowX: 'hidden',
                    bgcolor: 'background.default',
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
                      px: { xs: 1, sm: 2, md: 4 },
                      py: { xs: 2, sm: 3 },
                      position: 'relative',
                    }}
                  >
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <Home onMovieSelect={handleMovieSelect} />
                        }
                      />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/about" element={<About />} />
                      <Route 
                        path="/movie/:id" 
                        element={
                          <MovieDetail 
                            movie={selectedMovie}
                            open={Boolean(selectedMovie)}
                            onClose={() => setSelectedMovie(null)}
                            onBook={handleBookMovie}
                          />
                        } 
                      />
                      <Route path="/my-bag" element={<UserBag />} />
                    </Routes>
                  </Box>
                  <Footer />
                  {selectedMovie && (
                    <MovieDetail
                      movie={selectedMovie}
                      open={Boolean(selectedMovie)}
                      onClose={() => setSelectedMovie(null)}
                      onBook={handleBookMovie}
                    />
                  )}
                  {selectedMovie && (
                    <BookingDialog
                      open={isBookingOpen}
                      onClose={handleCloseBooking}
                      movie={selectedMovie}
                    />
                  )}
                  <ChatBot />
                </Box>
              </Router>
            </UserProvider>
          </AuthProvider>
        </BagProvider>
      </LanguageProvider>
    </ThemeContextProvider>
  );
};

export default App;
