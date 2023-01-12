import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';

import { gsap } from 'gsap'
import { ExpoScaleEase } from "gsap/EasePack"

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'

import './Header.css'

gsap.registerPlugin(ExpoScaleEase);
const navigation = [
    { path: '/', text: 'Home' },
];

const ITEM_HEIGHT = 48;

const Header = () => {
    let menu = useRef(null)
    let links = useRef(null)

    let tl = gsap.timeline({ paused: true });

    tl.to(menu, { duration: 1, opacity: 1, height: '60vh', ease: 'expo.inOut' })
    tl.from(links, { duration: 1,  opacity: 0, y: 20, stagger: 0.1, ease: 'expo.inOut', }, "-=0.5");
    tl.reverse();
            //   <Typography variant="h2" className='links' component="h2">
            //     home
            //   </Typography>
            //   <Typography variant="h2" className='links' component="h2">
            //     welcome    
            //   </Typography>
            //   <Typography variant="h2" className='links' component="h3">
            //     the board
            //   </Typography>

    return (
        <Box className='header-container' sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className='toolbar' disableGutters>
                <div>Logo</div>
                <div class="ham" onClick={() => tl.reversed(!tl.reversed)}>
                    <span>☰</span>
                </div>
            </Toolbar>
          </AppBar>
        </Box>
      );
    


}

export default Header