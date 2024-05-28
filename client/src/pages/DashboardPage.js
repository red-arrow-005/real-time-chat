import React, { useState } from 'react';
import { Grid } from '@mui/material';
import ChatListSidebar from '../components/ChatListSidebar/ChatListSidebar';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import { chatsData } from '../data/chats'; // Assume you have sample data here

const DashboardPage = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <ChatListSidebar chats={chatsData} onChatSelect={handleChatSelect} />
                </Grid>
                <Grid item xs={12} md={8}>
                    {selectedChat ? <ChatWindow chat={selectedChat} /> : <div>Select a chat to start messaging</div>}
                </Grid>
            </Grid>
        </>
    );
};

export default DashboardPage;
