import React from 'react'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import ActivityCard from '../ActivityCard/ActivityCard';
import boredLogo from '../../assets/theBored-blackRed.png'
import './Home.css'
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'

const Home = ({ activities, getAllActivities, addActivity }) => {
    return (
        <div className='stack-container'>
            <img src={boredLogo} alt='the bored logo' className='bored-logo' />
            <Stack
                direction="column"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                margin={2}
                width='100%'
                >
                <ActivityCard className='activity-card' activities={activities} addActivity={addActivity}/>
                <ThemeProvider theme={theme}>
                    <Button className='new-activity-btn' variant='outlined' onClick={() => getAllActivities()}>new activity</Button>
                </ThemeProvider>
            </Stack>
        </div>
    )
}

export default Home
Home.propTypes = {
    activities: PropTypes.object,
    getAllActivities: PropTypes.func,
    addActivity: PropTypes.func
}