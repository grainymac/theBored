import React from 'react'
import './Tasks.css'

const Tasks = ({ tasks }) => {
    return (
        <div className='task-card'>
            {tasks}
        </div>
    )
}

export default Tasks