import React from "react";

import Profil from "../Profil";
import NoteEtoiles from "../NoteEtoiles";
import Tags from "../Tags";

import "../../utils/css/style.css";

function IntoLogement({
  titre,
  localisation,
  proprietaire,
  photoProprietaire,
  note,
  tags,
}) {
  return (
    <div className='intro'>
      <div className='intro__gauche'>
        <h1 className='intro__gauche--titre'>{titre}</h1>
        <p className='intro__gauche--localisation'>{localisation}</p>
        <Tags tags={tags} />
      </div>
      <div className='intro__droite'>
        <Profil
          proprietaire={proprietaire}
          photoProprietaire={photoProprietaire}
        />
        <NoteEtoiles note={note} />
      </div>
    </div>
  );
}

export default IntoLogement;
