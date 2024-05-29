import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const AppWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

function App() {
  const { token, data } = useSelector((state) => state.auth);

  return (
    <Router>
      <AppWrapper>
        <ToastContainer />
        {token && <Header user={data} />}
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path='/dashboard' element={token ? <DashboardPage /> : <Navigate to="/auth" />} />
          <Route exact path="/auth" element={!token ? <AuthPage /> : <Navigate to="/dashboard" />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;
