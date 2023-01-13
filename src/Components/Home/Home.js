import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

import './Home.css';
import boredLogo from '../../assets/theBored-blackRed.png'
import InfoCard from '../InfoCard/InfoCard'
import ActivityCard from '../ActivityCard/ActivityCard'
import BadURL from '../BadURL/BadURL'
import Welcome from '../Welcome/Welcome'
import Board from '../Board/Board'
import theme from '../../theme'

const Home = ({ activities, getAllActivities, addActivity }) => {
    return (
        <main className='main-container'>
            <div className='logo-box'>
                <img src={boredLogo} className='bored-logo' />
            </div>
            <div className='info-box'>
                <InfoCard />
            </div>
            <div className='task-box'>
                <ActivityCard activities={activities.activity} accessibility={activities.accessibility} type={activities.type} participants={activities.participants} price={activities.price} link={activities.link} key={activities.key} />
            </div>
            <div className='button-box'>
                <ThemeProvider theme={theme}>
                    <Button color={theme.primary} className='active-btn' disabled={false} size="large" variant="contained" onClick={() => { getAllActivities() }}>
                        new activity
                    </Button>
                    <Button color={theme.secondary} className='board-btn' disabled={false} size="large" variant="contained" onClick={() => addActivity(activities.activity)}>
                        add to the board
                    </Button>
                </ThemeProvider>
            </div>
        </main>
    )
}

export default Home