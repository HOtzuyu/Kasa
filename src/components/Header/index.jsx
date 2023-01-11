import React from "react";
import { Link } from "react-router-dom";
import "../../utils/css/style.css";
import Logo from "../../assets/logo-Kasa.svg";

function Header() {
  return (
    <div className='header'>
      <Link to='/' className='header__logo'>
        <img className='header__logo--img' src={Logo} alt='logo de Kasa' />
      </Link>
      <nav className='header__liens'>
        <Link to='/' className='header__liens--url lien'>
          Acceuil
        </Link>
        <Link to='/a-propos' className='header__liens--url lien'>
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
