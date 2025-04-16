import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Brightness4, Brightness7, Home as HomeIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const theme = useTheme();
  const { toggleTheme, mode } = useThemeContext();
  const { currentUser, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      handleClose();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <AppBar position="static" elevation={1} sx={{ py: 1 }}>
      <Toolbar sx={{ minHeight: 80 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            component={Link}
            to="/"
            color="inherit"
            sx={{ mr: 1, fontSize: '1.5rem' }}
          >
            <HomeIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h4"
            component={Link}
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
            component={Link}
            to="/about"
            sx={{ 
              fontWeight: 600,
              fontSize: '1.1rem',
              textTransform: 'none',
            }}
          >
            About
          </Button>

          {currentUser ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  alt={currentUser.email || 'User'}
                  src={currentUser.photoURL || undefined}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>{t('nav.logout')}</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                component={Link}
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
                component={Link}
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