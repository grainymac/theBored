import React from 'react'
import './Activities.css'

const Activities = ({ activities, accessibility, type, participants, price, link, id }) => {
    return (
        <div className='text-container'>
            <p className='activity-text'>{activities}</p>
            <p className='access-text'>How accessible: {accessibility}</p>
            <p className='people-text'>How many people: {participants}</p>
            <p className='price-text'>How much it would cost: ${price}</p>
            <p className='link-text'>{link}</p>
        </div>
    )
}

export default Activities