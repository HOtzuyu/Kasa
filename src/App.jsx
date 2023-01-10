import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import PageLogements from "./pages/Logement";
import Page404 from "./pages/Erreur";
import Footer from "./components/Footer";

import "./utils/css/style.css";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Header path='/' />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/a-propos' element={<APropos />} />
          <Route path='/logement/:logementId' element={<PageLogements />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

export default App;
