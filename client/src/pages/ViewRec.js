import React from "react";
import NavBar from "../components/NavBar/index";
import {
  BackToProfile,
  DelBtn,
  EditBtn,
  Fave,
  ImgRec,
  RecBody,
  RecContainer,
  RecTitle,
  ViewContainer,
} from "../components/styling/style";
import bbqImage from "../images/bbqplaceholder.png";

const ViewRec = () => {
  return (
    <>
      <NavBar />
      <ViewContainer>
        <BackToProfile>
          <a href="backapage">Back to Profile</a>
        </BackToProfile>
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

              <div className="row text-center">
                <EditBtn className="col">Edit</EditBtn>
                <DelBtn className="col">Delete</DelBtn>
              </div>
            </RecBody>
          </RecContainer>
        </div>
      </ViewContainer>
    </>
  );
};

export default ViewRec;
