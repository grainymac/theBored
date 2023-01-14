import React from 'react'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import ActivityCard from '../ActivityCard/ActivityCard';
import boredLogo from '../../assets/theBored-blackRed.png'
import './Home.css'

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
                <ActivityCard activities={activities} addActivity={addActivity}/>
                <Button className='new-activity-btn' variant='contained' onClick={() => getAllActivities()}>new activity</Button>
            </Stack>
        </div>
    )
}

export default Home