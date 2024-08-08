import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatWindowWrapper from './ChatWindowWrapper'; // Adjust the import as needed

function AppRoutes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/astrid-seeger" element={<ChatWindowWrapper />} />
        <Route path="/michael-schulze" element={<ChatWindowWrapper />} />
        <Route path="/lieselotte-daenger" element={<ChatWindowWrapper />} />
        <Route path="*" element={<Navigate to="/astrid-seeger" />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
