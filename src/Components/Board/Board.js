import React from 'react'
import './Board.css'
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'

const Board = ({ activities }) => {

    // const deleteActivity = (event, activity) => {
    //     const deletion = board.filter(item => item.key !== event.key)
    //     setBoard([...deletion])
    //   }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button color={theme.secondary} className='board-btn' disabled={false} size="large" variant="contained">
                delete activity
                </Button>
            </ThemeProvider>
        </div>
    )
}

export default Board