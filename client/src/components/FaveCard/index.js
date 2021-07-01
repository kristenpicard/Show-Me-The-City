import React from "react";
import { FaveCardStyling } from "../styling/style";

const FaveCard = () => {
  return (
    <>
      <div className="col">
        <FaveCardStyling className="card card-block text-center">
          Card Title!
          <br></br>
          500 ✰<br></br>
          City Name
        </FaveCardStyling>
      </div>
    </>
  );
};

export default FaveCard;
