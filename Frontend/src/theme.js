import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';

// A custom theme for this app
const theme = createTheme({
  palette: {
    type:dark,
    primary: {
        main: '#e2f600',
        light: '#ffff57',
        dark: '#acc300',
    },
    secondary: {
        main: '#1645d3',
        light: '#6570ff',
        dark: '#001fa0',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;