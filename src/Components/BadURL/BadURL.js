import React from 'react'
import { Link } from 'react-router-dom'
import './BadURL.css'
import Button from '@mui/material/Button'


const BadURL = () => {
    return (
        <div className='badURL-container'>
                <h2 className='badURL-text'>You're on the wrong page dodo!<p>Click below to go back home</p></h2>
                <Link to='/'>
                    <Button variant="contained">
                        Home
                    </Button>
                </Link>
        </div>
    )
}

export default BadURL