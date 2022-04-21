import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import  Home  from './pages/Home';
import PlayOff from './pages/PlayOff';
import "./styles/global.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playoff" element={<PlayOff phase={'oitavas'}/>} />
        </Routes>
    </Router>
)