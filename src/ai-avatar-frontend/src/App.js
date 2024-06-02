// src/App.js
import React from 'react';
import ChatWindow from './pages/ChatWindow';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatWindow />} />
    </Routes>
  );
}
export default App;