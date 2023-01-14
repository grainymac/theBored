import React from 'react'
import './Board.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import theme from '../../theme'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const theme = createTheme()

const Board = ({ board, deleteActivity, completeActivity }) => {

    return (
        <div className='board-container'>
            <h2 className='board-title'>activity board</h2>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div>
                    <Container sx={{ py: 4, px: 0, display: 'flex', flexDirection: 'column', paddingRight: 7, justifyContent: 'center'}} maxWidth="100%" >
                        { !board.length && <h2 className='no-activity'>there are no activities saved! go back to save some</h2> }
                        <Grid className="grid" container spacing={4}>
                            {board.map((activity) => (
                            <Grid item key={activity.key} xs={12} sm={6} md={4}>
                                <Stack direction="column" spacing={2} justifyContent="space-between" alignItems="center">
                                    <CardContent sx={(theme) => ({ bgcolor: '#922E31', borderRadius: '15px', borderColor: 'black', borderStyle: 'hidden' })}>
                                        <Card sx={(theme) => ({ bgcolor: '#D09A95', borderRadius: '15px', borderStyle: 'hidden', justifySelf: 'center'})}>
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
                                            <Button variant="contained" className='delete-btn' color='success' onClick={() => deleteActivity(activity)}>
                                                delete
                                            </Button>
                                            <Button variant="contained" className='complete-btn' color='success' onClick={() => completeActivity(activity)}>
                                                complete activity
                                            </Button>
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