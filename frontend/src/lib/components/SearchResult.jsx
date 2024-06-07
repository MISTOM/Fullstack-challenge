import React from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';

const SearchResults = ({ searchTerm, books, addToReadingList }) => {
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>

        { filteredBooks.length > 0 ? <List>
            {filteredBooks.map((book) => (
                <ListItem key={book.title} divider>
                    <ListItemText primary={book.title} secondary={`Author: ${book.author}`} />
                    <Button onClick={() => addToReadingList(book)} style={{ backgroundColor: '#4AA088', color: '#ffffff' }}>Add to Reading List</Button>
                </ListItem>
            ))}
        </List>
        : <p>No books found</p>}
        </div>
    );
};

export default SearchResults;