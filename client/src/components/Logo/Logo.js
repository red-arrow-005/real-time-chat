import React from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper, LogoImage, LogoText } from './Logo.styles';

const Logo = () => {
    return (
        <LogoWrapper as={Link} to="/">
            <LogoImage src="/path-to-logo.png" alt="App Logo" />
            <LogoText>ChatApp</LogoText>
        </LogoWrapper>
    );
};

export default Logo;
