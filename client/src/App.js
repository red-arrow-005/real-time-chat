import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage'; // Import the authentication page component
import DashboardPage from './pages/DashboardPage';

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path='/dashboard' Component={() => (!user ? <AuthPage /> : <DashboardPage />)} />
          <Route exact path="/auth" Component={() => (!user ? <AuthPage /> : <Navigate to="/dashboard" />)}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
