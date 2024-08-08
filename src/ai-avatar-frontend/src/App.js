import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import ChatWindow from './pages/ChatWindow';

const App = () => {
  return (
    <Routes>
      <Route path="/:vignetteName" element={<ChatWindowWrapper />} />
      <Route path="/" element={<Navigate to="/astrid-seeger" />} />
    </Routes>
  );
};

const ChatWindowWrapper = () => {
  const { vignetteName } = useParams(); // Ensure this matches the route parameter name
  return <ChatWindow vignette={vignetteName} />;
};

export default App;
