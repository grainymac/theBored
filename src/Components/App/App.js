import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
// import boredLogo from '../../assets/theBored-blackRed.png'
import BadURL from '../BadURL/BadURL'
import Welcome from '../Welcome/Welcome'
import Board from '../Board/Board'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import getAllActivities from '../../apiCalls'

const App = () => {
  const [activities, setActivities] = useState({})
  const [board, setBoard] = useState([])
  const [e, setError] = useState('')

  // const getAllActivities = async () => {
  //   const url = "http://www.boredapi.com/api/activity/";
  //   try {
  //     const response = await axios(url, {
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     });
  //     setActivities(response.data);
  //   } catch (e) {
  //     setError(e)
  //     console.log(e);
  //   }
  // }

  const allActivities = () => {
    getAllActivities()
      .then(data => setActivities(data))
      .catch(e => setError(e))
  }
  
  useEffect(() => {
    allActivities()
  }, [])

  const addActivity = (activity) => {
    if (!board.some(item => item.key === activity.key))
    setBoard([...board, activity])
  }

  const deleteActivity = (event) => {
    const deletion = board.filter(item => item.key !== event.key)
    setBoard([...deletion])
  }

  const completeActivity = (event) => {
    window.alert('Completed Activity')
    const completion = board.filter(item => item.key !== event.key)
    setBoard([...completion])
  }

  return (
    <div className='container'>
      <Header />
      {e && e}
      <Routes>
        <Route exact path='/' element={(<Home activities={activities} getAllActivities={allActivities} addActivity={addActivity} /> )} />
        <Route path="/board" element={(<Board board={board} deleteActivity={deleteActivity} completeActivity={completeActivity}/>)} />
        <Route path="/welcome" element={(<Welcome />)} />
        <Route path='/*' element={(<BadURL />)} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
