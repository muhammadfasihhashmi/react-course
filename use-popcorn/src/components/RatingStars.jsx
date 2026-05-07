import React, { useState } from "react";
import Start from "./Start";

function RatingStars({ permanentStars, setPermanentStars }) {
  const [hoveringStars, setHoveringStars] = useState(0);

  console.log("hoverin", hoveringStars);
  console.log("perma", permanentStars);

  function handlePermanentStar(index) {
    setPermanentStars(index);
  }
  function handleHoveringStar(index) {
    setHoveringStars(index);
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: 10 }, (_, index) => (
        <Start
          key={index}
          index={index}
          handleHoveringStar={handleHoveringStar}
          handlePermanentStar={handlePermanentStar}
          isFill={
            hoveringStars ? index < hoveringStars : index < permanentStars
          }
        />
      ))}
      <p style={{ marginLeft: "5px", fontSize: "15px", color: "#fcc419" }}>
        {hoveringStars ? hoveringStars : permanentStars}
      </p>
    </div>
  );
}

export default RatingStars;
