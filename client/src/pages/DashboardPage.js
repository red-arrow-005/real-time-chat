import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ChatListSidebar from '../components/ChatListSidebar/ChatListSidebar';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import Header from '../components/Header/Header';
import { chatsData } from '../data/chats';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const ContentWrapper = styled(Grid)`
    flex: 1;
    overflow: hidden;
`;

const DashboardPage = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    return (
        <DashboardWrapper>
            <ContentWrapper container>
                <Grid item xs={12} md={4}>
                    <ChatListSidebar chats={chatsData} onChatSelect={handleChatSelect} />
                </Grid>
                <Grid item xs={12} md={8}>
                    {selectedChat ? <ChatWindow chat={selectedChat} /> : <div>Select a chat to start messaging</div>}
                </Grid>
            </ContentWrapper>
        </DashboardWrapper>
    );
};

export default DashboardPage;
