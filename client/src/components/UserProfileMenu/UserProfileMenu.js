import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserProfileWrapper, UserName } from './UserProfileMenu.styles';

const UserProfileMenu = ({ user }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <UserProfileWrapper>
            <UserName>{user.username}</UserName>
            <IconButton onClick={handleMenuOpen}>
                <Avatar src={user.avatar || ''} alt={user.username} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem component={Link} to="/profile">Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
        </UserProfileWrapper>
    );
};

export default UserProfileMenu;
