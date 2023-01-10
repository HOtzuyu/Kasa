import React from "react";
import { Link } from "react-router-dom";

import "../../utils/css/style.css";

function Page404() {
  return (
    <div className='erreurPage'>
      <h1 className='erreurPage__titre'>404</h1>
      <span className='erreurPage__texte'>
        Oups! La page que vous demandez n'existe pas.
      </span>
      <br />
      <Link to='/' className='erreurPage__retour'>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Page404;
