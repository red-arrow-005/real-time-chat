import styled from 'styled-components';

export const ChatListWrapper = styled.div`
    width: 300px;
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    padding: 10px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;

export const SearchWrapper = styled.div`
    margin-bottom: 10px;
`;
