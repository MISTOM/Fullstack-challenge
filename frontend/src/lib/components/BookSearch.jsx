import { useState } from "react";
import { Grid, Typography, Box } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import BookSearchBar from './BookSearchBar';
import SearchResults from './SearchResult';
import ReadingList from './ReadingList';

const BOOKS_QUERY = gql`
query Books {
    books {
        author
        coverPhotoURL
        readingLevel
        title
    }
}`;

const BookSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [readingList, setReadingList] = useState([]);
    const { data } = useQuery(BOOKS_QUERY);


    const addToReadingList = (book) => {
        if (!readingList.find(b => b.title === book.title)) {
            setReadingList([...readingList, book]);
            setSearchTerm('');
        }
    };

    const removeFromReadingList = (bookTitle) => {
        setReadingList(readingList.filter(book => book.title !== bookTitle));
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {/* Wrapper with relative positioning */}
                    <Box position="relative" width="50%" zIndex="tooltip">
                        <BookSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                        {searchTerm && (
                            <Box position="absolute" width="100%" zIndex="modal" sx={{ mt: 2, overflow: 'auto', maxHeight: 300, bgcolor: '#CFFAFA' }}>
                                <SearchResults searchTerm={searchTerm} books={data?.books || []} addToReadingList={addToReadingList} />
                            </Box>
                        )}
                    </Box>
                </Grid>
                    {
                    readingList.length > 0
                        ? <Typography variant="h3">Reading List</Typography>
                        : <Typography>No Books in your Reading List</Typography>}
                <Grid item xs={12}>
                    <ReadingList readingList={readingList} removeFromReadingList={removeFromReadingList} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default BookSearch;