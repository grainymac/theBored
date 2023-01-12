import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css';

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
      <h1>theBored</h1>
      <p>
        {tasks.activity}
      </p>
      <button onClick={() => getAllTasks()}>click it</button>
    </main>
  );
}

export default App;
