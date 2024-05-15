import React, { useState } from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import Login from '../components/Login';
import Register from '../components/Register';

const AuthPage = () => {
    const [tab, setTab] = useState(0);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Tabs value={tab} onChange={handleChange} aria-label="auth tabs">
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                {tab === 0 && <Login />}
                {tab === 1 && <Register />}
            </Box>
        </Container>
    );
}

export default AuthPage;
