import React, { useState } from 'react';
import { Container, Tabs, Tab, Box, Grid, Typography } from '@mui/material';
import Login from '../components/Login';
import Register from '../components/Register';

const AuthPage = () => {
    const [tab, setTab] = useState(0);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Container component="main" maxWidth="lg" disableGutters sx={{ display: 'flex', height: '100vh' }}>
            <Grid container sx={{ flexGrow: 1, height: '100%' }}>
                <Grid item xs={12} md={6} sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                }} />
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    padding: 3,
                }}>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <Typography component="h1" variant="h5" align="center" gutterBottom>
                            Welcome to the Chat Application
                        </Typography>
                        <Tabs value={tab} onChange={handleChange} aria-label="auth tabs" variant="fullWidth" sx={{ mb: 2 }}>
                            <Tab label="Login" />
                            <Tab label="Register" />
                        </Tabs>
                        {tab === 0 && <Login />}
                        {tab === 1 && <Register />}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AuthPage;
