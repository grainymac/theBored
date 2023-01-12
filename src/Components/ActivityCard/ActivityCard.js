import React from 'react'

import Activities from '../Activities/Activities'
import './ActivityCard.css'


const ActivityCard = ({ activities }) => {

    return (
        <div className='activity-card'>
            <Activities activities={activities} />
        </div>
    )
}

export default ActivityCard