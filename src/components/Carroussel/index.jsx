import React from "react";
import { useState } from "react";

import droite from "../../assets/droite.svg";
import gauche from "../../assets/gauche.svg";

import "../../utils/css/style.css";

let index = 0;

function Carroussel({ pictures }) {
  const [, setNewImg] = useState(0);

  function btnsuivant() {
    index++;
    if (index >= pictures.length) index = 0;
    setNewImg(index);
  }
  function btnprecedent() {
    index--;
    if (index < 0) index = pictures.length - 1;
    setNewImg(index);
  }

  function navigation() {
    return (
      <div className='slider__navigation'>
        <img
          src={gauche}
          className='slider__navigation--precedent'
          onClick={btnprecedent}
          alt=''
        />
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
