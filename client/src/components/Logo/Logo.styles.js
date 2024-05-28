import styled from 'styled-components';

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const LogoImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        margin-right: 8px;
    }
`;

export const LogoText = styled.span`
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;
