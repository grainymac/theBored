import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import boredLogo from '../../assets/theBored-blackRed.png'
import InfoCard from '../InfoCard/InfoCard'
import ActivityCard from '../ActivityCard/ActivityCard'
import BadURL from '../BadURL/BadURL'
import Welcome from '../Welcome/Welcome'
import Board from '../Board/Board'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
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

  const addActivity = (activity) => {
  }


  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route exact path='/' element={
          <main className='main-container'>

            <div className='logo-box'>
              <img src={boredLogo} className='bored-logo' alt='the bored logo' />
            </div>
            <div className='info-box'>
              <InfoCard />
            </div>
            <div className='task-box'>
              <ActivityCard activities={activities.activity} accessibility={activities.accessibility} type={activities.type} participants={activities.participants} price={activities.price} link={activities.link} id={activities.key} />
            </div>
            {e && e}
            <div className='button-box'>
              <ThemeProvider theme={theme}>
                <Button color={theme.primary} className='active-btn' disabled={false} size="large" variant="contained" onClick={() => { getAllActivities() }}>
                  new activity
                </Button>
                <Button color={theme.secondary} className='board-btn' disabled={false} size="large" variant="contained" onClick={() => addActivity(activities)}>
                  add to the board
                </Button>
              </ThemeProvider>
            </div>
          </main>
        } />
        <Route path="/board" element={(<Board activity={activities} />)} />
        <Route path="/welcome" element={(<Welcome />)} />
        <Route path='/*' element={(<BadURL />)} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
