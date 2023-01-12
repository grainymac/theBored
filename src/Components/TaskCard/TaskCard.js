import React from 'react'

import Tasks from '../Tasks/Tasks'
import './TaskCard.css'


const TaskCard = ({ tasks }) => {

    return (
        <div>
            <Tasks tasks={tasks}>
        </div>
    )
}

export default TaskCard