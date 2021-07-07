import React from "react";
import NavBar from "../components/NavBar/index";
import {
  EditBtn,
  Fave,
  ImgRec,
  RecBody,
  RecContainer,
  RecTitle,
  ViewContainer,
} from "../components/styling/style";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import bbqImage from "../images/bbqplaceholder.png";
import Container from 'react-bootstrap/Container';

const ViewFavorite = () => {
  return (
    <>
      <NavBar />
      <ViewContainer>
      <Breadcrumb>
        <Breadcrumb.Item href="backapage">Back to Profile</Breadcrumb.Item>
        </Breadcrumb>
         <Container> 
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

              <div className="text-center">
                <EditBtn>Share</EditBtn>
              </div>
            </RecBody>
          </RecContainer>
        </div>
        </Container>
      </ViewContainer>
    </>
  );
};

export default ViewFavorite;
