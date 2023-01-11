import React from "react";
import "../../utils/css/style.css";

function Tags({ tags }) {
  return (
    <div className='tags'>
      {tags.map((tag) => (
        <p key={tag} className='tags__tag'>
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tags;
