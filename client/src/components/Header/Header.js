import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import UserProfileMenu from '../UserProfileMenu/UserProfileMenu';
import Notifications from '../Notifications/Notifications';

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #3f51b5;
`;

const Header = ({ user }) => {
    return (
        <HeaderWrapper>
            <Logo />
            <SearchBar />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Notifications />
                <UserProfileMenu user={user} />
            </div>
        </HeaderWrapper>
    );
};

export default Header;
