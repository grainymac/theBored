import React, { useEffect, useState } from 'react'
import axios from 'axios'

import boredLogo from '../../assets/theBored-blackRed.png'
import './App.css';

import InfoCard from '../InfoCard/InfoCard'
import TaskCard from '../TaskCard/TaskCard'

const App = () => {
  const [tasks, setTasks] = useState({})
  const [e, setError] = useState('')

  const getAllTasks = async () => {
    const url = "http://www.boredapi.com/api/activity/";
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response.data)
      setTasks(response.data);
    } catch (e) {
      setError(e)
      console.log(e);
    }

  }
  useEffect(() => {
    
    getAllTasks()
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
        <TaskCard tasks={tasks.activity} />
      </div>
      <div className='button-box'>
        <button onClick={() => getAllTasks()}>click it</button>
        <button onClick={() => getAllTasks()}>click it</button>
      </div>
    </main>
  );
}

export default App;
