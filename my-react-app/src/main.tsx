import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import { store } from './store/store';
import {dataAuthorization} from './data/data-authorization'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} > 
        <App dataAuthorization={dataAuthorization}/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
