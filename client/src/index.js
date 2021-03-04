import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import {App} from './App';
import { ContextProvider } from './components/context/context';
import { UserProvider } from './components/context/UserProvider';
//mui theme provider
import {ThemeProvider} from "@material-ui/core/styles"
import theme from "./components/theme"


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ContextProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
