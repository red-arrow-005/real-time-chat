import React from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper, LogoImage, LogoText } from './Logo.styles';
import Icon from '../../assets/icon-3-removebg-preview.png';

const Logo = () => {
    return (
        <LogoWrapper as={Link} to="/">
            <LogoImage src={Icon} alt="App Logo" />
            <LogoText>ChatApp</LogoText>
        </LogoWrapper>
    );
};

export default Logo;
