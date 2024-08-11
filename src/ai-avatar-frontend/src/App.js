import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatWindow from './pages/ChatWindow';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/astrid-seeger" />} />
        <Route path="/astrid-seeger" element={<ChatWindow vignette="astrid-seeger" />} />
        <Route path="/michael-schulze" element={<ChatWindow vignette="michael-schulze" />} />
        <Route path="/lieselotte-daenger" element={<ChatWindow vignette="lieselotte-daenger" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
};

export default App;
