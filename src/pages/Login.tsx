import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  CircularProgress,
  Divider,
  Alert,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { login, signInWithGoogle, signInWithFacebook, signInWithMicrosoft, isFirebaseAvailable } = useAuth();
  const { t } = useLanguage();

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError(t('login.error.required'));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(t('login.error.email'));
      isValid = false;
    }

    if (!password) {
      setPasswordError(t('login.error.required'));
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError(t('login.error.password'));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    if (!isFirebaseAvailable) {
      setError('Authentication is not available. Please configure Firebase environment variables.');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : t('login.error.failed'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    if (!isFirebaseAvailable) {
      setError('Google authentication is not available. Please configure Firebase environment variables.');
      return;
    }
    setIsLoading(true);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      console.error('Google login error:', err);
      setError(err instanceof Error ? err.message : t('login.error.failed'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleMicrosoftLogin = async () => {
    setError('');
    if (!isFirebaseAvailable) {
      setError('Microsoft authentication is not available. Please configure Firebase environment variables.');
      return;
    }
    setIsLoading(true);
    try {
      await signInWithMicrosoft();
      navigate('/');
    } catch (err) {
      console.error('Microsoft login error:', err);
      setError(err instanceof Error ? err.message : t('login.error.failed'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setError('');
    if (!isFirebaseAvailable) {
      setError('Facebook authentication is not available. Please configure Firebase environment variables.');
      return;
    }
    setIsLoading(true);
    try {
      await signInWithFacebook();
      navigate('/');
    } catch (err) {
      console.error('Facebook login error:', err);
      setError(err instanceof Error ? err.message : t('login.error.failed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5">
            {t('nav.login')}
          </Typography>
          
          {!isFirebaseAvailable && (
            <Alert severity="warning" sx={{ mt: 2, width: '100%' }}>
              Firebase authentication is not configured. Please set up Firebase environment variables to enable login functionality.
            </Alert>
          )}
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              sx={{ mt: 2, mb: 1 }}
              required
              fullWidth
              id="email"
              label={t('booking.email')}
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
              disabled={isLoading || !isFirebaseAvailable}
            />
            <TextField
              sx={{ mt: 2, mb: 1 }}
              required
              fullWidth
              name="password"
              label={t('login.password')}
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
              disabled={isLoading || !isFirebaseAvailable}
            />
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading || !isFirebaseAvailable}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                t('nav.login')
              )}
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link
                to="/register"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography variant="body2" color="primary">
                  {t('nav.register')}
                </Typography>
              </Link>
            </Box>
            <Divider sx={{ my: 2 }}>OR</Divider>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
              disabled={isLoading || !isFirebaseAvailable}
              sx={{ mb: 2 }}
            >
              Continue with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              onClick={handleFacebookLogin}
              disabled={isLoading || !isFirebaseAvailable}
              sx={{ mb: 2 }}
            >
              Continue with Facebook
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<PublicIcon />}
              onClick={handleMicrosoftLogin}
              disabled={isLoading || !isFirebaseAvailable}
            >
              Continue with Microsoft
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 