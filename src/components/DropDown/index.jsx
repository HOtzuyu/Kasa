import React from "react";
import { useState } from "react";

import "../../utils/css/style.css";

import IconClose from "../../assets/fermer.svg";
import IconOpen from "../../assets/ouvert.svg";

function Dropdown({ title, text, extraClass }) {
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
        // <p className="dropdown__section--text">{ text }</p>
        <div>
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
