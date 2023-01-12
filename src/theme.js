import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#115363',
            darker: '#053e85',
        },
        secondary: {
            main: '#9c3111',
            contrastText: '#fffff',
        },
    },
});

export default theme