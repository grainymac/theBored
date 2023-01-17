import React from 'react'
import './Footer.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar'

const Footer = () => {
    return (
        <Box className='header-container' sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='toolbar' disableGutters>
                    <p>App is developed by Ian McIntosh</p>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Footer