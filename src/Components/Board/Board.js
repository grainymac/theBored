import React from 'react'
import './Board.css'
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import theme from '../../theme'

const Board = ({ board, deleteActivity, completeActivity }) => {

    return (
        <div className='board-container'>
            <h1 className='board-title'>activity board</h1>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div>
                    <Container sx={{ py: 4, px: 0, display: 'flex', flexDirection: 'column', paddingRight: 7, justifyContent: 'center'}} maxWidth="100%" >
                        { !board.length && <h2 className='no-activity'>there are no activities saved! go back to save some</h2> }
                        <Grid className="grid" container spacing={4}>
                            {board.map((activity) => (
                            <Grid item key={activity.key} xs={12} sm={6} md={3}>
                                <Stack direction="column" spacing={2} justifyContent="space-between" alignItems="center">
                                    <CardContent sx={(theme) => ({ bgcolor: '#922E31', borderRadius: '15px', borderColor: 'black', borderStyle: 'hidden', contain: 'content' })}>
                                        <Card sx={(theme) => ({ bgcolor: '#D09A95', borderRadius: '15px', borderStyle: 'hidden',contain: 'content', justifySelf: 'center'})}>
                                            <Typography p='5%' gutterBottom color="black" sx={(theme) => ({
                                                [theme.breakpoints.down('sm')]: {
                                                    fontSize: 'medium',
                                                    fontWeight: 'bold',
                                                    marginTop: '4%'
                                                },
                                                [theme.breakpoints.down('md')]: {
                                                    fontSize: 'medium',
                                                    fontWeight: 'bold',
                                                    marginTop: '2%'
                                                }, })}>
                                                    {activity.activity}
                                            </Typography>
                                        </Card>
                                        <div className='btn-container'>
                                            <ThemeProvider theme={theme}>
                                                <Button variant="text" className='delete-btn' color={theme.main} onClick={() => deleteActivity(activity)}>
                                                    🗑️
                                                </Button>
                                                <Button variant="text" className='complete-btn' color={theme.main} onClick={() => completeActivity(activity)}>
                                                    ✅
                                                </Button>
                                            </ThemeProvider>
                                        </div>
                                    </CardContent>
                                </Stack>
                            </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Board
Board.propTypes = {
    board: PropTypes.array,
    deleteActivity: PropTypes.func,
    completeActivity: PropTypes.func
}