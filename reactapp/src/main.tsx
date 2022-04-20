import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import {PlayOff} from './pages/PlayOff';
import "./styles/global.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <PlayOff phase = 'semiFinal'/>
  </React.StrictMode>
)