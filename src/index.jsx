// ******************** fichier racine du projet **********************
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'

import './utils/css/style.css'

ReactDOM.render(
  <React.StrictMode>
      <Router>    
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>        
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)