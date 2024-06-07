// BookSearchBar.jsx
import React from 'react';
import { TextField } from '@mui/material';

const BookSearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <TextField
            label="Search Books"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};

export default BookSearchBar;