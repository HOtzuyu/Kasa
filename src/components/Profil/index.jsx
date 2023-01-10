import React from "react";

import "../../utils/css/style.css";

function Profil({ proprietaire, photoProprietaire }) {
  var name = { proprietaire };
  var nom = name.proprietaire.replace(" ", `<br />`);

  return (
    <div className='profil'>
      <h3 className='profil__name'>{nom}</h3>
      <img
        className='profil__picture'
        src={photoProprietaire}
        alt={proprietaire}
      />
    </div>
  );
}

export default Profil;
