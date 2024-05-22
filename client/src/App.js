import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage'; // Import the authentication page component
import DashboardPage from './pages/DashboardPage';
import { useSelector } from 'react-redux';

function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path='/dashboard' element={token ? <DashboardPage /> : <Navigate to="/auth" />} />
          <Route exact path="/auth" Component={() => (!token ? <AuthPage /> : <Navigate to="/dashboard" />)}>
            <Route path="*" element={<Navigate to={token ? "/dashboard" : "/auth"} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
