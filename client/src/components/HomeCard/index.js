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
          <ImgRec src={bbqImage} alt="bbq"></ImgRec>
          <RecContainer>
            <br></br>
            <div className="row text-center">
              <RecTitle className="col">Best BBQ!</RecTitle>
              <Fave href="test" className="col">
                500 ✰
              </Fave>
            </div>

            <RecBody className="container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>

            </RecBody>
          </RecContainer>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
