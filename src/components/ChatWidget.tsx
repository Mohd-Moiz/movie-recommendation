import React, { useState } from 'react';
import { Fab, Drawer, IconButton, Box, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import AIChat from './ai-chat';

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(prev => !prev);

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleOpen}
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1300 }}
      >
        <ChatIcon />
      </Fab>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleOpen}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 360, md: 400 },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            AI Assistant
          </Typography>
          <IconButton onClick={toggleOpen} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ flex: '1 1 auto', overflowY: 'auto' }}>
          <AIChat />
        </Box>
      </Drawer>
    </>
  );
};

export default ChatWidget;
