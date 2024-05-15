import React, { useState } from 'react';
import { Container, Tabs, Tab, Box, Grid, Typography } from '@mui/material';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const AuthPage = () => {
    const [tab, setTab] = useState(0);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    const handleSignUpClick = () => {
        setTab(1);
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
                        <Typography
                            component="h1"
                            variant="h5"
                            align="center"
                            gutterBottom
                            sx={{
                                background: 'linear-gradient(to right, #4A5D5E, #3E4851)', // Linear gradient background
                                WebkitBackgroundClip: 'text', // Apply gradient as text color
                                WebkitTextFillColor: 'transparent', // Make the text transparent to show the gradient background
                            }}
                        >
                            Welcome to the Chat Application
                        </Typography>
                        <Tabs
                            value={tab}
                            onChange={handleChange}
                            aria-label="auth tabs"
                            variant="fullWidth"
                            sx={{ mb: 2 }}
                            TabIndicatorProps={{ style: { background: '#4A5D5E' } }} // Change tab indicator color
                        >
                            <Tab label="Login" sx={{ '&.Mui-selected': { color: '#4A5D5E' } }} /> {/* Change text color when selected */}
                            <Tab label="Register" sx={{ '&.Mui-selected': { color: '#4A5D5E' } }} /> {/* Change text color when selected */}
                        </Tabs>
                        {tab === 0 && <Login onSignUpClick={handleSignUpClick} />}
                        {tab === 1 && <Register />}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AuthPage;
