import React from "react";
import "../assets/styles/noMatch.css"

function NoMatch() {
  return (
    <div className="nomatch">
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </div>
  );
}

export default NoMatch;
