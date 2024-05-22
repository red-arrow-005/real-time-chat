// src/components/Dashboard/Dashboard.js

import React from 'react';
import { Box, Typography } from '@mui/material';
import LogoutButton from '../LogoutButton/LogoutButton'; // Import the LogoutButton component

const Dashboard = () => {
    return (
        <Box>
            <Typography variant="h4" align="center" gutterBottom>
                Dashboard
            </Typography>
            {/* Other dashboard content */}
            <LogoutButton /> {/* Use the LogoutButton component here */}
        </Box>
    );
};

export default Dashboard;
