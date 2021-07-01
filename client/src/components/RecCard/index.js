import React from "react";
import { RecCardStyling } from "../styling/style";

const RecCard = () => {
  return (
    <>
      <div className="col">
        <RecCardStyling className="card text-center">
          Card Title!
          <br></br>
          500 ✰
        </RecCardStyling>
      </div>
    </>
  );
};

export default RecCard;
