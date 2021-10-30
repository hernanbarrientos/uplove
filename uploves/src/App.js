import React from 'react';
import Router from './routes/Router'
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './constants/theme';




const App = () =>  {
  
  return (
    <MuiThemeProvider theme={theme}>
      <Router/> 
    </MuiThemeProvider>
    
  );
}

export default App;
