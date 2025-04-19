import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Alert } from '@mui/material';
import { getPopularMovies } from '../services/movieService';

const TestApi: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    // Get API key from environment variables
    const key = import.meta.env.VITE_OMDB_API_KEY || 'demo';
    setApiKey(key);
  }, []);

  const testApi = async () => {
    try {
      setStatus('loading');
      setMessage('Testing API connection...');

      const movies = await getPopularMovies();
      
      if (movies.length > 0) {
        setStatus('success');
        setMessage(`API connection successful! Using ${apiKey === 'demo' ? 'demo' : 'custom'} API key.`);
      } else {
        setStatus('error');
        setMessage('No movies found. Please check your API key or try again later.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect to the API. Using mock data instead.');
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={testApi}
        disabled={status === 'loading'}
        sx={{ mb: 2 }}
      >
        Test API Connection
      </Button>

      {status === 'loading' && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Testing connection...
        </Alert>
      )}

      {status === 'success' && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {message}
        </Alert>
      )}

      {status === 'error' && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {message}
        </Alert>
      )}

      <Typography variant="body2" color="text.secondary">
        Current API Key: {apiKey === 'demo' ? 'Using demo mode' : 'Custom API key set'}
      </Typography>
    </Box>
  );
};

export default TestApi; 