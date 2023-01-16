import React from 'react'
import './ActivityCard.css'
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './ActivityCard.css'
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'

const ActivityCard = ({ activities, addActivity }) => {
    
    return (
        <div className='activity-card-container'>
            <Stack direction="column" spacing={2} justifyContent="space-between" alignItems="center">
                <Box className='box' sx={(theme) => ({
                    [theme.breakpoints.down('sm')]: { marginRight: '15%' },
                    [theme.breakpoints.down('md')]: { marginRight: '15%' }
                })}>
                    <div className='activity-container'>
                        <Typography m="2.55%" className='card-text' variant="div" sx={(theme) => ({
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            width: '80%',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: 'small',
                                fontWeight: 'bold',
                                marginTop: '4%'
                            },
                            [theme.breakpoints.up('md')]: {
                                fontSize: 'larger',
                                fontWeight: 'bold',
                                marginTop: '4%',
                                marginLeft: '10%',
                                width: "60%"
                            },
                            [theme.breakpoints.down('md')]: {
                                fontSize: 'medium',
                                fontWeight: 'bold',
                                marginTop: '8%',
                                marginLeft: "5%"
                            },
                            [theme.breakpoints.up('lg')]: {
                                marginLeft: '24%',
                                width: '50%',
                                marginTop: '1%'
                            }
                        })}>
                            <h2>{activities.activity}</h2>
                            <p>The is a {activities.type} type of activity. </p>
                            <p>{activities.link}</p>
                        </Typography>
                    </div>
                </Box>
                <ThemeProvider theme={theme}>
                    <Button className='add-activity-btn' variant="contained" color={theme.main} onClick={() => addActivity(activities)}>
                        add to board
                    </Button>
                </ThemeProvider>
            </Stack>
        </div>
    )
}

export default ActivityCard
ActivityCard.propTypes = {
    activities: PropTypes.object,
    addActivity: PropTypes.func
}