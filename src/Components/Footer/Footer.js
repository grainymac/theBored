import React from 'react'
import './Footer.css'

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'

const Footer = () => {
    return (
        <Box className='header-container' sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='toolbar' disableGutters>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Footer