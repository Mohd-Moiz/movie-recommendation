import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { auth } from '../firebase';
import { updateProfile, updateEmail, sendPasswordResetEmail } from 'firebase/auth';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const { toggleTheme, mode } = useThemeContext();
  const { language, setLanguage } = useLanguage();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [message, setMessage] = useState('');

  const handleSave = async () => {
    setMessage('');
    try {
      if (auth.currentUser) {
        if (name !== user?.name) {
          await updateProfile(auth.currentUser, { displayName: name });
        }
        if (email !== user?.email) {
          await updateEmail(auth.currentUser, email);
        }
      }
      setMessage('Profile updated successfully.');
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleResetPassword = async () => {
    setMessage('');
    try {
      if (auth.currentUser?.email) {
        await sendPasswordResetEmail(auth, auth.currentUser.email);
        setMessage('Password reset email sent.');
      }
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    }
  };

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h6">Please log in to view your profile.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        {message && <Typography color="secondary">{message}</Typography>}
        <Typography variant="h6" gutterBottom>
          Preferences
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={mode === 'dark'} onChange={toggleTheme} />}
            label="Dark Mode"
          />
        </FormGroup>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select
            labelId="language-select-label"
            value={language}
            label="Language"
            onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'fr' | 'de' | 'hi' | 'zh')}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="fr">Français</MenuItem>
            <MenuItem value="de">Deutsch</MenuItem>
            <MenuItem value="hi">हिंदी</MenuItem>
            <MenuItem value="zh">中文</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handleResetPassword}>
          Reset Password
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Changes
          </Button>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
