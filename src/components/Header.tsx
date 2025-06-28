import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Alert,
  Snackbar,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Brightness4, Brightness7, Home as HomeIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { toggleTheme, mode } = useThemeContext();
  const { user, logout, isFirebaseAvailable } = useAuth();
  const { t } = useLanguage();
  const [logoutError, setLogoutError] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
      setLogoutError('Failed to logout. Please try again.');
    }
  };

  const handleCloseError = () => {
    setLogoutError('');
  };

  return (
    <>
      <AppBar position="static" elevation={1} sx={{ py: 1 }}>
        <Toolbar sx={{ minHeight: 80 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ mr: 1, fontSize: '1.5rem' }}
            >
              <HomeIcon fontSize="large" />
            </IconButton>
            <Typography
              variant="h4"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                display: { xs: 'none', sm: 'block' },
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Movie Recommendations
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/about"
              sx={{ 
                fontWeight: 600,
                fontSize: '1.1rem',
                textTransform: 'none',
              }}
            >
              About
            </Button>

            {user && (
              <Button
                color="inherit"
                component={RouterLink}
                to="/watchlist"
                sx={{
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                }}
              >
                {t('nav.watchlist')}
              </Button>
            )}

            {user && (
              <Button
                color="inherit"
                component={RouterLink}
                to="/recommendations"
                sx={{
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                }}
              >
                {t('nav.recommendations')}
              </Button>
            )}

            {user && (
              <Button
                color="inherit"
                component={RouterLink}
                to="/profile"
                sx={{
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                }}
              >
                {user.name}
              </Button>
            )}

            {user ? (
              <>
                <Button
                  color="inherit"
                  onClick={handleLogout}
                  disabled={!isFirebaseAvailable}
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/login"
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                  }}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/register"
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                  }}
                >
                  Register
                </Button>
              </>
            )}

            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{ ml: 1, fontSize: '1.5rem' }}
            >
              {mode === 'dark' ? <Brightness7 fontSize="large" /> : <Brightness4 fontSize="large" />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Snackbar
        open={!!logoutError}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {logoutError}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Header; 