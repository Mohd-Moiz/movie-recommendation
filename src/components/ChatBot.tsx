import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, Typography, List, ListItem, Tooltip, Button } from '@mui/material';
import MinimizeIcon from '@mui/icons-material/Minimize';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import { Movie } from '../types';
import { mockMovies } from '../data/mockMovies';

interface Message {
  text: string;
  isUser: boolean;
  movie?: Movie;
}

interface ChatBotProps {
  onMovieSelect: (movie: Movie) => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onMovieSelect }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [savedMovies, setSavedMovies] = useState<Set<number>>(new Set());
  const [favoriteMovies, setFavoriteMovies] = useState<Set<number>>(new Set());
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I can help you find movies based on your preferences. Try asking something like 'Recommend me a thriller like Inception'", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const findSimilarMovies = (reference: string, genre?: string) => {
    const referenceMovie = mockMovies.find(
      movie => movie.title.toLowerCase() === reference.toLowerCase()
    );

    if (!referenceMovie) return [];

    return mockMovies
      .filter(movie => {
        if (movie.id === referenceMovie.id) return false;
        if (genre && !movie.genres.includes(genre)) return false;
        
        // Check for similar genres
        const genreMatch = movie.genres.some(g => referenceMovie.genres.includes(g));
        
        // Check for similar tags
        const tagMatch = movie.tags.some(t => referenceMovie.tags.includes(t));
        
        // Check for similar rating range
        const ratingMatch = Math.abs(movie.rating - referenceMovie.rating) <= 1;
        
        return genreMatch && (tagMatch || ratingMatch);
      })
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
  };

  const processMessage = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Pattern matching for "recommend me a [genre] like [movie]"
    const recommendPattern = /recommend me a (\w+) like (.+)/i;
    const match = message.match(recommendPattern);

    if (match) {
      const [, genre, movieName] = match;
      const similarMovies = findSimilarMovies(movieName.trim(), genre.trim());
      
      if (similarMovies.length > 0) {
        return {
          text: `Based on your interest in ${movieName}, here are some ${genre} recommendations:`,
          recommendations: similarMovies
        };
      } else {
        return {
          text: `I couldn't find any similar ${genre} movies like ${movieName}. Try asking about a different movie or genre!`,
          recommendations: []
        };
      }
    }

    // Default response
    return {
      text: "I'm not sure what you're looking for. Try asking something like 'Recommend me a thriller like Inception'",
      recommendations: []
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    const response = processMessage(input);
    const botMessage = { text: response.text, isUser: false };

    setMessages(prev => [...prev, userMessage, botMessage]);
    
    if (response.recommendations?.length > 0) {
      response.recommendations.forEach(movie => {
        setMessages(prev => [
          ...prev,
          {
            text: `${movie.title} (Rating: ${movie.rating}/10) - ${movie.description.substring(0, 100)}...`,
            isUser: false,
            movie
          }
        ]);
      });
    }

    setInput('');
  };

  return (
    <Box sx={{ position: 'fixed', bottom: { xs: 16, md: 24 }, right: { xs: 16, md: 24 }, zIndex: 1000 }}>
      {isMinimized ? (
        <IconButton
          onClick={() => setIsMinimized(false)}
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            width: 56,
            height: 56,
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            boxShadow: 3,
          }}
        >
          <ChatIcon />
        </IconButton>
      ) : (
        <Paper 
          elevation={3} 
          sx={{ 
            width: { xs: 'calc(100% - 32px)', sm: 400 },
            maxHeight: { xs: '60vh', md: '70vh' },
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: 24,
          }}
        >
          <Box sx={{ 
            p: 2, 
            borderBottom: 1, 
            borderColor: 'divider',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: '8px 8px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Movie AI Assistant
            </Typography>
            <IconButton
              onClick={() => setIsMinimized(true)}
              size="small"
              sx={{ color: 'primary.contrastText' }}
            >
              <MinimizeIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ 
            flex: 1,
            overflowY: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            minHeight: '300px',
            maxHeight: { xs: 'calc(60vh - 140px)', md: 'calc(70vh - 140px)' },
          }}>
            <List>
              {messages.map((message, index) => (
                <ListItem
                  key={index}
                  sx={{
                    justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                    mb: 1,
                    padding: 1
                  }}
                >
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: message.isUser ? 'primary.light' : 'grey.100',
                      color: message.isUser ? 'primary.contrastText' : 'text.primary',
                      maxWidth: '80%',
                      borderRadius: message.isUser ? '20px 20px 0 20px' : '20px 20px 20px 0',
                      boxShadow: 1
                    }}
                  >
                    <Typography variant="body2">
                      {message.text}
                    </Typography>
                    {!message.isUser && message.movie && (
                      <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Button
                          variant="text"
                          size="small"
                          onClick={() => message.movie && onMovieSelect(message.movie)}
                          sx={{ mr: 1 }}
                        >
                          View Details
                        </Button>
                        <Tooltip title="Save for later">
                          <IconButton
                            size="small"
                            onClick={() => {
                              if (message.movie) {
                                const newSaved = new Set(savedMovies);
                                if (newSaved.has(message.movie.id)) {
                                  newSaved.delete(message.movie.id);
                                } else {
                                  newSaved.add(message.movie.id);
                                }
                                setSavedMovies(newSaved);
                              }
                            }}
                          >
                            {message.movie && savedMovies.has(message.movie.id) ? 
                              <BookmarkIcon color="primary" /> : 
                              <BookmarkBorderIcon />}
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Add to favorites">
                          <IconButton
                            size="small"
                            onClick={() => {
                              if (message.movie) {
                                const newFavorites = new Set(favoriteMovies);
                                if (newFavorites.has(message.movie.id)) {
                                  newFavorites.delete(message.movie.id);
                                } else {
                                  newFavorites.add(message.movie.id);
                                }
                                setFavoriteMovies(newFavorites);
                              }
                            }}
                          >
                            {message.movie && favoriteMovies.has(message.movie.id) ? 
                              <FavoriteIcon color="error" /> : 
                              <FavoriteBorderIcon />}
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}
                  </Paper>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ 
            p: 2, 
            borderTop: 1, 
            borderColor: 'divider',
            bgcolor: 'background.paper',
            display: 'flex', 
            gap: 1 
          }}>
            <TextField
              fullWidth
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for movie recommendations..."
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  '&:hover': {
                    '& > fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                },
              }}
            />
            <IconButton 
              color="primary" 
              onClick={handleSend}
              sx={{ 
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
};
