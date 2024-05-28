import React from 'react';
import { List, ListItem, ListItemText, Avatar, Divider, InputBase, Paper } from '@mui/material';
import { ChatListWrapper, SearchWrapper } from './ChatListSidebar.styles';

const ChatListSidebar = ({ chats, onChatSelect }) => {
    return (
        <ChatListWrapper>
            <SearchWrapper>
                <Paper component="form">
                    <InputBase
                        placeholder="Search Chats"
                        inputProps={{ 'aria-label': 'search chats' }}
                        fullWidth
                    />
                </Paper>
            </SearchWrapper>
            <List>
                {chats.map((chat, index) => (
                    <React.Fragment key={index}>
                        <ListItem button onClick={() => onChatSelect(chat)}>
                            <Avatar alt={chat.name} src={chat.avatar} />
                            <ListItemText primary={chat.name} secondary={chat.lastMessage} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </ChatListWrapper>
    );
};

export default ChatListSidebar;
