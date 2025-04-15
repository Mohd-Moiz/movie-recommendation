import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Brightness4, Brightness7, Home as HomeIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const theme = useTheme();
  const { toggleTheme, mode } = useThemeContext();
  const { user, logout } = useAuth();

  return (
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

          {user ? (
            <>
              <Typography 
                variant="h6" 
                sx={{ 
                  display: { xs: 'none', sm: 'block' },
                  fontWeight: 500,
                }}
              >
                Welcome, {user.name}
              </Typography>
              <Button
                color="inherit"
                onClick={logout}
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
  );
};

export default Header; 