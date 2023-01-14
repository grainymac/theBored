import React from 'react'
import './ActivityCard.css'
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const ActivityCard = ({ activities, addActivity }) => {

    return (
        <div className='activity-card-container'>
            <Stack direction="column" spacing={2} justifyContent="space-between" alignItems="center">
                <Box className='box' sx={(theme) => ({
                    [theme.breakpoints.down('sm')]: {marginRight:'15%'},
                    [theme.breakpoints.down('md')]: {marginRight: '15%'}})}>
                    <div className='activity-container'>
                    <Typography m="2.55%" variant="h5" color="white" sx={(theme) => ({
                        display:'flex',
                        flexDirection:'column',
                        flexWrap:'wrap',
                        width:'60%',
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
                            width:"60%"
                        },
                        [theme.breakpoints.down('md')]: {
                            fontSize: 'medium',
                            fontWeight: 'bold',
                            marginTop: '8%',
                            marginLeft:"5%"
                        },
                        [theme.breakpoints.up('lg')]: {
                            marginLeft:'24%',
                            width:'35%',
                            marginTop:'1%'
                        }})}>
                            {activities.activity}
                        </Typography>
                    </div>
                </Box>
            </Stack>
        </div>
    )
}

export default ActivityCard