import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'

import './Header.css'


const navigation = [
    { path: '/', text: 'Home' },
];

const ITEM_HEIGHT = 48;

const Header = () => {

    return (
        <Box className='header-container' sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className='toolbar' disableGutters>
              <Typography variant="h2" className='links' component="h2">
                home
              </Typography>
              <Typography variant="h2" className='links' component="h2">
                welcome    
              </Typography>
              <Typography variant="h2" className='links' component="h3">
                the board
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
    


}

export default Header