import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import {App} from './App';
import { ContextProvider } from './components/context/context';
import { UserProvider } from './components/context/UserProvider';


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
