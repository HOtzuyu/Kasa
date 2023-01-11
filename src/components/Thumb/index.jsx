import React from "react";
import "../../utils/css/style.css";

function Thumb({ cover, title }) {
  return (
    <div className='thumb'>
      <img src={cover} alt={title} className='thumb__image' />
      <div className='thumb__filter'></div>
      <h2 className='thumb__title'>{title}</h2>
    </div>
  );
}

export default Thumb;
