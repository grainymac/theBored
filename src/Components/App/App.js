import React, { useEffect, useState } from 'react'
import axios from 'axios'

import boredLogo from '../../assets/theBored-blackRed.png'
import './App.css';

import InfoCard from '../InfoCard/InfoCard'
import ActivityCard from '../ActivityCard/ActivityCard'

const App = () => {
  const [activities, setActivities] = useState({})
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

  return (
    <main className='main-container'>
      <div className='logo-box'>
        <img src={boredLogo} className='bored-logo' />
      </div>
      <div className='info-box'>
        <InfoCard />
      </div>
      <div className='task-box'>
        <ActivityCard activities={activities.activity}  />
      </div>
      <div className='button-box'>
        <button onClick={() => getAllActivities()}>click it</button>
        <button onClick={() => getAllActivities()}>click it</button>
      </div>
    </main>
  );
}

export default App;
