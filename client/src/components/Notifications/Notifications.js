import React, { useState } from 'react';
import { IconButton, Badge, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NotificationsWrapper } from './Notifications.styles';

const Notifications = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [notifications, setNotifications] = useState([
        'Notification 1',
        'Notification 2',
        'Notification 3'
    ]);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <NotificationsWrapper>
            <IconButton onClick={handleMenuOpen}>
                <Badge badgeContent={notifications.length} color="error">
                    <NotificationsIcon style={{ color: '#fff' }} />
                </Badge>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {notifications.map((notification, index) => (
                    <MenuItem key={index} onClick={handleMenuClose}>
                        {notification}
                    </MenuItem>
                ))}
            </Menu>
        </NotificationsWrapper>
    );
};

export default Notifications;
