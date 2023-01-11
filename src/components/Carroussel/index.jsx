import React from "react";
import { useState } from "react";
import droite from "../../assets/droite.svg";
import gauche from "../../assets/gauche.svg";
import "../../utils/css/style.css";

let index = 0; //initialisation de l'index

function Carroussel({ pictures }) {
  const [, setNewImg] = useState(0);

  // fonction du bouton suivant
  function btnsuivant() {
    index++;
    if (index >= pictures.length) index = 0;
    setNewImg(index);
  }

  // fonction du bouton précédent
  function btnprecedent() {
    index--;
    if (index < 0) index = pictures.length - 1;
    setNewImg(index);
  }

  // mise en place des boutons de navigation et chiffre de page
  function navigation() {
    return (
      <div className='slider__navigation'>
        <img
          src={gauche}
          className='slider__navigation--precedent'
          onClick={btnprecedent}
          alt=''
        />
        {/* Mise en place du chiffrement de l'image slide */}
        <p className='slider__navigation--chiffre'>
          {index + 1}/{pictures.length}
        </p>
        <img
          src={droite}
          className='slider__navigation--suivant'
          onClick={btnsuivant}
          alt=''
        />
      </div>
    );
  }
  // acativation du slide
  return (
    <div className='slider'>
      <img
        className='slider__photo'
        src={pictures[index]}
        alt={pictures[index]}
      />
      {pictures.length > 1 ? navigation() : ""}
    </div>
  );
}

export default Carroussel;
