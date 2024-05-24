import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header/Header'; // Import the Header component
import { useSelector } from 'react-redux';

function App() {
  const { token } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.auth); // Assuming user data is in the state

  return (
    <Router>
      <div>
        <ToastContainer />
        {token && <Header user={data} />} {/* Render Header only if logged in */}
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path='/dashboard' element={token ? <DashboardPage /> : <Navigate to="/auth" />} />
          <Route exact path="/auth" element={!token ? <AuthPage /> : <Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
