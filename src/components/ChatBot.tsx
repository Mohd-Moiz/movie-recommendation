import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  CircularProgress,
  Button,
  Divider,
  Collapse,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';
import { useBag } from '../contexts/BagContext';
import { Movie } from '../types/Movie';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const { t } = useLanguage();
  const { bag } = useBag();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(input, bag);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput: string, userBag: any): string => {
    const input = userInput.toLowerCase();
    
    // Context-aware responses based on user's bag
    if (input.includes('watchlist') || input.includes('watch list')) {
      if (userBag.watchlist.length === 0) {
        return "You don't have any movies in your watchlist yet. Would you like me to recommend some movies for you?";
      }
      return `You have ${userBag.watchlist.length} movies in your watchlist. Would you like to see them?`;
    }

    if (input.includes('favorite') || input.includes('favourite')) {
      if (userBag.favorites.length === 0) {
        return "You haven't added any movies to your favorites yet. Would you like me to suggest some great movies?";
      }
      return `You have ${userBag.favorites.length} favorite movies. Would you like to see them?`;
    }

    if (input.includes('watched')) {
      if (userBag.watched.length === 0) {
        return "You haven't marked any movies as watched yet. Would you like to see some popular movies?";
      }
      return `You've watched ${userBag.watched.length} movies. Would you like to see your watched history?`;
    }

    // General responses
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! I'm your movie assistant. How can I help you today?";
    }

    if (input.includes('help')) {
      return "I can help you with:\n- Finding movies\n- Managing your watchlist\n- Adding movies to favorites\n- Tracking watched movies\n- Getting movie recommendations\nWhat would you like to do?";
    }

    if (input.includes('recommend') || input.includes('suggest')) {
      return "I'd be happy to recommend some movies! What kind of movies do you like? You can tell me your favorite genres or recent movies you enjoyed.";
    }

    return "I'm not sure I understand. Could you please rephrase your question? I can help you with movie recommendations, managing your watchlist, or finding specific movies.";
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        p: 2,
        gap: 2,
      }}
    >
      <Collapse in={isOpen} orientation="vertical">
        <Paper
          elevation={3}
          sx={{
            width: { xs: '100%', sm: 350 },
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: theme.palette.background.paper,
          }}
        >
          <Box
            sx={{
              p: 2,
              borderBottom: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SmartToyIcon color="primary" />
              <Typography variant="h6">Movie Assistant</Typography>
            </Box>
            <IconButton onClick={() => setIsOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {messages.map((message) => (
              <Box
                key={message.id}
                sx={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: 1,
                }}
              >
                {message.sender === 'bot' && (
                  <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                    <SmartToyIcon />
                  </Avatar>
                )}
                <Paper
                  sx={{
                    p: 2,
                    maxWidth: '70%',
                    bgcolor: message.sender === 'user' ? theme.palette.primary.main : theme.palette.background.paper,
                    color: message.sender === 'user' ? theme.palette.primary.contrastText : theme.palette.text.primary,
                  }}
                >
                  <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                    {message.text}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
                    {message.timestamp.toLocaleTimeString()}
                  </Typography>
                </Paper>
                {message.sender === 'user' && (
                  <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>
                    <PersonIcon />
                  </Avatar>
                )}
              </Box>
            ))}
            {isTyping && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={20} />
                <Typography variant="body2" color="text.secondary">
                  Assistant is typing...
                </Typography>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          <Box
            sx={{
              p: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              multiline
              maxRows={4}
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              disabled={!input.trim() || isTyping}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Collapse>

      {!isOpen && (
        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              bgcolor: theme.palette.primary.dark,
            },
          }}
        >
          <ChatIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ChatBot;
