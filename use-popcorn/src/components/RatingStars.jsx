import React, { useState } from "react";
import Start from "./Start";

function RatingStars() {
  const [hoveringStars, setHoveringStars] = useState(0);
  const [permanentStars, setPermanentStars] = useState(0);

  console.log("hoverin", hoveringStars);
  console.log("perma", permanentStars);

  function handlePermanentStar(index) {
    setPermanentStars(index);
  }
  function handleHoveringStar(index) {
    setHoveringStars(index);
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
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
    </div>
  );
}

export default RatingStars;
