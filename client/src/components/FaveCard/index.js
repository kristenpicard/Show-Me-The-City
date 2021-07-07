import React from "react";
import { FaveCardStyling } from "../styling/style";

const FaveCard = (props) => {
  return (
    <>
      <div className="col">
        <FaveCardStyling className="card card-block text-center">
          {props.title}!<br></br>
          {props.favorites} ✰<br></br>
          {props.location} ✰
        </FaveCardStyling>
      </div>
    </>
  );
};

export default FaveCard;
