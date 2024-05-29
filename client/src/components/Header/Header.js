import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import UserProfileMenu from '../UserProfileMenu/UserProfileMenu';
import Notifications from '../Notifications/Notifications';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #4A5D5E;
    width: 100%;
    flex-shrink: 0; /* Prevent the header from shrinking */

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
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
