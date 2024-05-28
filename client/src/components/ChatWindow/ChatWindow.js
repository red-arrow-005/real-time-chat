import React from 'react';
import { ChatWindowWrapper } from './ChatWindow.styles';

const ChatWindow = ({ chat }) => {
    return (
        <ChatWindowWrapper>
            <h2>{chat.name}</h2>
            {/* Render chat messages here */}
        </ChatWindowWrapper>
    );
};

export default ChatWindow;
