import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    status: {
        danger: '#bd7873',
    },
    palette: {
        primary: {
            main: '#bd7873',
            darker: '#bd7873',
        },
        secondary: {
            main: '#9c3111',
            contrastText: '#fffff',
        },
    },
});

export default theme