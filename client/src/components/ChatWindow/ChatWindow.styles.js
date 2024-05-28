import styled from 'styled-components';

export const ChatWindowWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px); // Adjust for header height
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 10px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;
