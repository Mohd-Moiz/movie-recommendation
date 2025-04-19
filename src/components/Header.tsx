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
  useMediaQuery,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Brightness4, 
  Brightness7, 
  Home as HomeIcon, 
  Menu as MenuIcon,
  Movie as MovieIcon,
  LocalMovies as LocalMoviesIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { toggleTheme, mode } = useThemeContext();
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
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
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: { xs: 56, sm: 64 },
        px: { xs: 1, sm: 2 },
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            color="inherit"
            component={Link}
            to="/"
            sx={{ p: { xs: 0.5, sm: 1 } }}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Movie Recommendations
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={handleMobileMenu}
              sx={{ p: { xs: 0.5, sm: 1 } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 200,
                },
              }}
            >
              <MenuItem component={Link} to="/about" onClick={handleClose}>
                About
              </MenuItem>
              {user && (
                <>
                  <MenuItem component={Link} to="/recommendations" onClick={handleClose}>
                    <MovieIcon sx={{ mr: 1 }} />
                    Recommendations
                  </MenuItem>
                  <MenuItem component={Link} to="/my-bag" onClick={handleClose}>
                    <LocalMoviesIcon sx={{ mr: 1 }} />
                    My Movies
                  </MenuItem>
                </>
              )}
              {user ? (
                <>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar
                      sx={{ width: 24, height: 24, mr: 1 }}
                      alt={user.email || 'User'}
                      src={user.photoURL || undefined}
                    />
                    Profile
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem component={Link} to="/login" onClick={handleClose}>
                    Login
                  </MenuItem>
                  <MenuItem component={Link} to="/register" onClick={handleClose}>
                    Register
                  </MenuItem>
                </>
              )}
              <MenuItem onClick={toggleTheme}>
                {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{ 
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              About
            </Button>

            {user && (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/recommendations"
                  startIcon={<MovieIcon />}
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  Recommendations
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/my-bag"
                  startIcon={<LocalMoviesIcon />}
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  My Movies
                </Button>
              </>
            )}

            {user ? (
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
                    alt={user.email || 'User'}
                    src={user.photoURL || undefined}
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
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
                    fontSize: '1rem',
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
                    fontSize: '1rem',
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
              sx={{ 
                p: { xs: 0.5, sm: 1 },
                fontSize: '1.5rem',
              }}
            >
              {mode === 'dark' ? <Brightness7 fontSize="large" /> : <Brightness4 fontSize="large" />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 