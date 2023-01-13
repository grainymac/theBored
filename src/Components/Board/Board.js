import React from 'react'
import './Board.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Board = ({ activities }) => {

    // const deleteActivity = (event, activity) => {
    //     const deletion = board.filter(item => item.key !== event.key)
    //     setBoard([...deletion])
    //   }

    return (
        <div className='board-container'>
            <h2 className='board-title'>the board</h2>
            
        </div>
    )
}

export default Board