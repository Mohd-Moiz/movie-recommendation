import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Avatar,
  Grid,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
} from '@mui/material';
import {
  Movie as MovieIcon,
  Code as CodeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon,
  Devices as DevicesIcon,
  Palette as PaletteIcon,
} from '@mui/icons-material';

const About: React.FC = () => {
  const theme = useTheme();

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Firebase', 'Material-UI', 
    'JavaScript', 'HTML/CSS', 'Git', 'REST APIs', 'Responsive Design'
  ];

  const features = [
    {
      icon: <MovieIcon color="primary" />,
      title: 'Smart Recommendations',
      description: 'AI-powered movie suggestions based on your preferences and viewing history'
    },
    {
      icon: <SecurityIcon color="primary" />,
      title: 'Secure Authentication',
      description: 'Firebase-powered user authentication with secure data management'
    },
    {
      icon: <DevicesIcon color="primary" />,
      title: 'Responsive Design',
      description: 'Optimized for all devices - desktop, tablet, and mobile'
    },
    {
      icon: <PaletteIcon color="primary" />,
      title: 'Dark/Light Mode',
      description: 'Customizable theme with smooth transitions and user preferences'
    },
    {
      icon: <TrendingUpIcon color="primary" />,
      title: 'Real-time Updates',
      description: 'Live data from multiple movie APIs (TMDB, OMDb)'
    },
    {
      icon: <StarIcon color="primary" />,
      title: 'User Experience',
      description: 'Intuitive interface with smooth animations and modern UI'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}
        >
          About Movie Recommendation
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          A modern, intelligent movie recommendation platform designed to help you discover 
          your next favorite film through advanced algorithms and personalized suggestions.
        </Typography>
      </Box>

      {/* Developer Profile Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Meet the Developer
        </Typography>
        
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{ 
                width: 200, 
                height: 200, 
                mx: 'auto',
                mb: 2,
                border: `4px solid ${theme.palette.primary.main}`,
                boxShadow: theme.shadows[8]
              }}
              alt="Mohammed Moiz"
              src="/moiz.jpeg"
            />
            <Box sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                sx={{ mr: 1, mb: 1 }}
                href="mailto:iammohammedmoiz@gmail.com"
              >
                Email
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                sx={{ mr: 1, mb: 1 }}
                href="https://github.com/Mohd-Moiz"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                sx={{ mb: 1 }}
                href="https://www.linkedin.com/in/mohammed-moiz-884853244/"
                target="_blank"
              >
                LinkedIn
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Mohammed Moiz
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              Full Stack Developer
            </Typography>
            
            <Typography paragraph sx={{ mb: 3 }}>
              Passionate developer with expertise in modern web technologies. 
              Specialized in creating user-centric applications with clean code 
              and exceptional user experiences.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WorkIcon sx={{ mr: 1 }} />
                Experience
              </Typography>
              <Typography variant="body1" color="text.secondary">
                • 3+ years in Full Stack Development<br/>
                • Specialized in React & TypeScript<br/>
                • Experience with Firebase & Cloud Services
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolIcon sx={{ mr: 1 }} />
                Education
              </Typography>
              <Typography variant="body1" color="text.secondary">
                • Bachelor's in Computer Science<br/>
                • Certified in Modern Web Technologies<br/>
                • Continuous learning in AI/ML
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CodeIcon sx={{ mr: 1 }} />
                Technical Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Chip 
                    key={skill} 
                    label={skill} 
                    variant="outlined" 
                    color="primary"
                    size="small"
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Project Features Section */}
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Project Features
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              elevation={2} 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8]
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Technology Stack Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Technology Stack
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              Frontend
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                <ListItemText primary="React 18 with TypeScript" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Material-UI (MUI) for UI Components" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                <ListItemText primary="React Router for Navigation" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Framer Motion for Animations" />
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              Backend & Services
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                <ListItemText primary="Firebase Authentication & Firestore" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                <ListItemText primary="TMDB API for Movie Data" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                <ListItemText primary="OMDb API for Additional Details" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CodeIcon color="primary" /></ListItemIcon>
                <ListItemText primary="YouTube API for Trailers" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>

      {/* Project Goals Section */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Project Goals & Vision
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              🎯 Our Mission
            </Typography>
            <Typography paragraph>
              To create an intelligent movie recommendation platform that helps users 
              discover amazing films they might otherwise miss, using cutting-edge 
              technology and user-friendly design.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              🚀 Future Enhancements
            </Typography>
            <Typography paragraph>
              • AI-powered recommendation algorithms<br/>
              • Social features and movie sharing<br/>
              • Watchlist synchronization<br/>
              • Mobile app development<br/>
              • Voice search capabilities
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About; 