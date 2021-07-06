import React from "react";
import { RecCardStyling } from "../styling/style";

function RecCard(props) {
  console.log(props);
  // props.data.map(({ title }) => {
    return (
      <>
        <div className="col">
          <RecCardStyling className="card text-center">
            {props.data.title}!<br></br>
            {/* {props.favorites} ✰ */}
          </RecCardStyling>
        </div>
      </>
    );
  }
//   );
// }

export default RecCard;
