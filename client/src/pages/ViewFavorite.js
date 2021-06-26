import React from "react";
import NavBar from "../components/NavBar/index";
import {
  DelBtn,
  EditBtn,
  Fave,
  ImgRec,
  RecBody,
  RecContainer,
  RecTitle,
  ViewContainer,
} from "../components/styling/style";
// import "./style.css";
import bbqImage from "../images/bbqplaceholder.png";

const ViewFavorite = () => {
  return (
    <>
      <NavBar />
      <ViewContainer>
        <a href="backapage">Back to Profile</a>
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
              <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>consectetur adipiscing elit</li>
                <li>sed do eiusmod tempor</li>
                <li>incididunt ut labore et dolore</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>consectetur adipiscing elit</li>
                <li>sed do eiusmod tempor</li>
                <li>incididunt ut laboreet dolore</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>consectetur adipiscing elit</li>
              </ol>
              <div className="text-center">
                <EditBtn>Share</EditBtn>
                
              </div>
            </RecBody>
          </RecContainer>
        </div>
      </ViewContainer>
    </>
  );
};

export default ViewFavorite;