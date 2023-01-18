import React from "react";
import "../../utils/css/style.css";

function Profil({ proprietaire, photoProprietaire }) {
  return (
    <div className='profil'>
      <h3 className='profil__name'>{proprietaire}</h3>
      <img
        className='profil__picture'
        src={photoProprietaire}
        alt={proprietaire}
      />
    </div>
  );
}

export default Profil;
