import React from "react";
import { Link } from "react-router-dom";
import logoB from "../../assets/LOGO-B.svg";
import "../../utils/css/style.css";

function Footer() {
  return (
    <div className='footer'>
      <Link to='/'>
        <img src={logoB} alt='logo blanc' className='footer__logo' />
      </Link>
      <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
