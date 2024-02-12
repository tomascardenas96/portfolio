import "./styles/Bookmarker.css";

import React from "react";

function Bookmarker({ icon, name }) {
  return (
    <div className="book-marker__container">
      <div>{icon}</div>
      <p>{name}</p>
    </div>
  );
}

export default Bookmarker;
