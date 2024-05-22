// src/components/LogoutButton/LogoutButton.js

import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/authActions'; // Import your logout action

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout(navigate));
    };

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            sx={{
                mt: 2,
                background: 'linear-gradient(to right, #FF5F6D, #FFC371)', // Gradient background
                color: 'white', // Text color
                '&:hover': {
                    background: 'linear-gradient(to right, #FFC371, #FF5F6D)', // Gradient background on hover
                },
            }}
        >
            Logout
        </Button>
    );
};

export default LogoutButton;
