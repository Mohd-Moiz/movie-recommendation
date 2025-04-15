import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Avatar,
} from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About Us
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Movie Recommendation System
          </Typography>
          <Typography paragraph>
            This movie recommendation system is designed to help users discover new movies
            based on their preferences and viewing history. Our platform uses advanced
            algorithms to provide personalized movie suggestions.
          </Typography>
          
          <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
            Developed By
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
              },
              gap: 4,
              mt: 2,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                sx={{ width: 100, height: 100, mb: 2 }}
                alt="Mohammed Moiz"
              />
              <Typography variant="h6">Mohammed Moiz</Typography>
              <Typography color="text.secondary">Full Stack Developer</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                sx={{ width: 100, height: 100, mb: 2 }}
                alt="Mohammed Kaid"
              />
              <Typography variant="h6">Mohammed Kaif</Typography>
              <Typography color="text.secondary">Web Developer</Typography>
            </Box>
          </Box>

          <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>
            Features
          </Typography>
          <Typography component="ul" sx={{ pl: 2 }}>
            <Typography component="li">Personalized movie recommendations</Typography>
            <Typography component="li">User authentication and profiles</Typography>
            <Typography component="li">Dark/Light mode support</Typography>
            <Typography component="li">Responsive design for all devices</Typography>
            <Typography component="li">Detailed movie information</Typography>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About; 