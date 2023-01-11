import React from "react";
import { useState } from "react";
import IconClose from "../../assets/fermer.svg";
import IconOpen from "../../assets/ouvert.svg";
import "../../utils/css/style.css";

function Dropdown({ title, text, extraClass }) {
  //init stat to false || true si deploy
  const [dropdownStart, setDropdown] = useState(false);
  const handleOpen = () => {
    setDropdown(!dropdownStart);
  };
  return (
    <div className={extraClass ? "dropdown " + extraClass : "dropdown"}>
      <div className='dropdown__section' onClick={handleOpen}>
        <h2 className='dropdown__section--title'>{title}</h2>
        {dropdownStart ? (
          <img src={IconOpen} alt='icone ouverte' />
        ) : (
          <img src={IconClose} alt='icone fermée' />
        )}
      </div>
      {dropdownStart ? (
        <div>
          {/* Check si l'élément reçu est un texte ou une liste */}
          {typeof text === "object" ? (
            tabEquipement(text)
          ) : (
            <p className='dropdown__section--text'>{text}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

// mise en place de liste dans le deploy
function tabEquipement(tab) {
  return (
    <ul className='dropdown__section--list'>
      {tab.map((equipment) => (
        <li key={equipment}>{equipment}</li>
      ))}
    </ul>
  );
}

export default Dropdown;
