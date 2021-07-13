import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import AppContext from './configs/context';
import theme from './configs/theme';
import AppRouter from '../app/configs/router';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContext>
        <AppRouter />
      </AppContext>
    </ThemeProvider>
  );
}

export default App;
