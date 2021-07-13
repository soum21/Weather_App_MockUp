import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ef5350'
    },
    secondary: {
      main: '#f44336'
    }
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 500,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: '#ef5350',
        '&$focused': {
          color: 'f44336',
          fontWeight: 'bold'
        }
      },

      focused: {}
    },
    MuiFormHelperText: {
      root: {
        color: '#ef5350'
      }
    }
  }
});

export default theme;
