import React from 'react'
import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'

import './Header.css'

const Header = () => {

    return (
        <Box className='header-container' sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='toolbar' disableGutters>
                    <Typography variant="h2" className='links' component="h2">
                        <NavLink to='/'>home</NavLink>
                    </Typography>
                    <Typography variant="h2" className='links' component="h2">
                        <NavLink to='/welcome'>welcome</NavLink>    
                    </Typography>
                    <Typography variant="h2" className='links' component="h3">
                        <NavLink to='/board'>the board</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header