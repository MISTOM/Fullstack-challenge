import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';

const ReadingList = ({ readingList, removeFromReadingList }) => {
    return (    
        <Grid container spacing={2}>
            {readingList.map((book) => (
                <Grid item xs={12} sm={6} md={4} key={book.title}>
                    <Card style={{backgroundColor: '#ffe6dc'}} sx={{ maxWidth: 345, m: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={book.coverPhotoURL}
                            alt={book.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {book.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Author: {book.author}
                            </Typography>
                            <Box display="flex" justifyContent="flex-end">
                                <Button size="small" variant="outlined" style={{color: '#28b8b8'}} onClick={() => removeFromReadingList(book.title)}>
                                    Remove
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ReadingList;