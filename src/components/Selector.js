import React from "react";

// IMPORT STYLE
import "../styles/components/selector.css";
import "../reset.css";

const Selector = () => {
  return (
    <div className="selector-flag">
      <img
        src="https://ik.imagekit.io/ppayaz/ppayaz-website/flag_fQzludPB8.png?updatedAt=1634221524609"
        alt="flag"
      />
      <ul className="language">
        <li>Español</li>
        <li>English</li>
      </ul>
    </div>
  );
};

export default Selector;
