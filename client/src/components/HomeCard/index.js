import React from "react";
import {
  DelBtn,
  EditBtn,
  Fave,
  ImgRec,
  RecBody,
  RecContainer,
  RecTitle,
} from "../styling/style";
import bbqImage from "../../images/bbqplaceholder.png";

function HomeCard(props) {
  console.log(props);

  return (
    <>
      <div className="carousel-item active">
        <div className="container">
          <br></br>
          <ImgRec src={props.data.image} alt="bbq"></ImgRec>
          <RecContainer>
            <br></br>
            <div className="row text-center">
              <RecTitle className="col">{props.data.title}</RecTitle>
              <Fave href="test" className="col">
                500 ✰
              </Fave>
            </div>

            <RecBody className="container">
              <p>
              {props.data.synopsis}
              </p>

            </RecBody>
          </RecContainer>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
