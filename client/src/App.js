import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage'; // Import the authentication page component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route exact path="/auth" element={<AuthPage />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
