import React from 'react'

import Activities from '../Activities/Activities'
import './ActivityCard.css'


const ActivityCard = ({ activities, accessibility, type, participants, price, link, id }) => {

    return (
        <div className='activity-card'>
            <Activities activities={activities} accessibility={accessibility} type={type} participants={participants} price={price} link={link} id={id}/>
        </div>
    )
}

export default ActivityCard