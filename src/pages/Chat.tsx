import React from 'react';
import AIChat from '../components/ai-chat';

const Chat: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">AI Chat Bot</h1>
      <AIChat />
    </div>
  );
};

export default Chat;
