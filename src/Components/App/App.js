import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import boredLogo from '../../assets/theBored-blackRed.png'
import BadURL from '../BadURL/BadURL'
import Welcome from '../Welcome/Welcome'
import Board from '../Board/Board'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import theme from '../../theme'
import Home from '../Home/Home'

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
    if (!board.some(item => item.key === activity.key))
    setBoard([...board, activity])
  }

  const deleteActivity = (event, activity) => {
    const deletion = board.filter(item => item.key !== event.id)
    setBoard([...deletion])
  }

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route exact path='/' element={(<Home activities={activities} getAllActivities={getAllActivities} addActivity={addActivity} /> )} />
        <Route path="/board" element={(<Board board={board} deleteActivity={deleteActivity} />)} />
        <Route path="/welcome" element={(<Welcome />)} />
        <Route path='/*' element={(<BadURL />)} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
