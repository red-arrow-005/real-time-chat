import React from 'react';
import { TextField } from '@mui/material';
import { SearchBarWrapper } from './SearchBar.styles';

const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="Search..."
                size="small"
            />
        </SearchBarWrapper>
    );
};

export default SearchBar;
