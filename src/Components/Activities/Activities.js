import React from 'react'
import './Activities.css'

const Activities = ({ activities }) => {
    return (
        <div className='activity-text'>
            {activities}
        </div>
    )
}

export default Activities