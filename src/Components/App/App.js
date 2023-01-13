import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import boredLogo from '../../assets/theBored-blackRed.png'
import InfoCard from '../InfoCard/InfoCard'
import ActivityCard from '../ActivityCard/ActivityCard'
import BadURL from ''
import Board from '../Board/Board'
import theme from '../../theme'

const App = () => {
  const [activities, setActivities] = useState({})
  const [board, setBoard] = useState([])
  const [e, setError] = useState('')

  const getAllActivities = async () => {
    const url = "http://www.boredapi.com/api/activity/";
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response.data)
      setActivities(response.data);
    } catch (e) {
      setError(e)
      console.log(e);
    }

  }
  useEffect(() => {
    getAllActivities()
  }, [])

  const addActivity = (activities) => {
    if (!board.some(item => item.key === activities.key))
      setBoard([...board, activities]);
  }

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
          <Button color={theme.primary} className='active-btn' disabled={false} size="large" variant="contained" onClick={() => {getAllActivities()}}>
            new activity
          </Button>
          <Button color={theme.secondary} className='board-btn' disabled={false} size="large" variant="contained" onClick={() => addActivity(activities.activity)}>
            add to the board
          </Button>
        </ThemeProvider>
      </div>
      <Routes>
          <Route path='/' />
          <Route path="/board" element={(<Board activities={activities.activity} addActivity={addActivity} />)} />
          <Route path="/welcome" element={(<Welcome />)} />
          <Route path='/*' element={(<BadURL />)} />
        </Routes>
    </main>
  );
}

export default App;
