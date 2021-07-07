import React from "react";
import { Link } from "react-router-dom";
import { RecCardStyling } from "../styling/style";

function RecCard(props) {
  const recID = props.data._id;
  const data = props.data;
  const setData = props.setData;
  const location = props.location;
  return (
    <>
      <div className="col">
        <RecCardStyling className="card text-center">
          <Link
            to={{
              pathname: "/view-recommendation",
              rec: { recID },
              data: { data },
              setData: { setData },
              location: { location },
            }}
          >
            {props.data.title}!
            <br></br>
            <br></br>
         
          </Link>
          <br></br>
          {/* {props.favorites} ✰ */}
        </RecCardStyling>
      </div>
    </>
  );
}

export default RecCard;
