import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import APropos from './pages/APropos' 

import './utils/css/style.css'

const App = () => {
  return (
    <React.StrictMode>
      <Router>    
        <Header path="/" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
        </Routes>        
      </Router>
    </React.StrictMode>
  );
};

export default App;
