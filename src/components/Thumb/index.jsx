import React from "react";

import "../../utils/css/style.css"

//utilisation de props signifie « propriétés » et utilisation des mots clés de la data pour pouvoir récupérer la data consernée.
function Thumb(props) {
  return (
    <div className="thumb">
      <img src={props.cover} alt={props.title} className="thumb__image"/>
      <div className="thumb__filter"></div>
      <h2 className="thumb__title">{props.title}</h2>
    </div>
  );
}

export default Thumb;