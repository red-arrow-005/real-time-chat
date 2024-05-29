import styled from 'styled-components';

export const ChatListWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow-y: auto; /* Ensures scrolling within the sidebar */

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;

export const SearchWrapper = styled.div`
    margin-bottom: 10px;

    .MuiPaper-root {
        background-color: #3E4851;
    }

    .MuiInputBase-root {
        color: white;
    }

    .MuiInputBase-input::placeholder {
        color: #ccc;
    }
`;
