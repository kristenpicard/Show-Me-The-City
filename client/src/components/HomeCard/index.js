import React from "react";
import {
  Fave,
  ImgRec,
  RecBody,
  RecContainer,
  RecTitle,
} from "../styling/style";
import Carousel from "react-bootstrap/Carousel";

const style = {
  overflow: "auto",
};

function HomeCard(props) {
  return (
    // <>
    //   <div className="carousel-item active">
    //     <div className="container">
    //       <br></br>
    //       <ImgRec src={props.data.image} alt="bbq"></ImgRec>
    //       <RecContainer>
    //         <br></br>
    //         <div className="row text-center">
    //           <RecTitle className="col">{props.data.title}</RecTitle>
    //           <Fave href="test" className="col">
    //             500 ✰
    //           </Fave>
    //         </div>

    //         <RecBody className="container">
    //           <div style={style}>
    //             <p>{props.data.synopsis}</p>
    //           </div>
    //         </RecBody>
    //       </RecContainer>
    //     </div>
    //   </div>
    // </>
    <div className="col" >
      <img src={props.data.image} alt="test"/>
      <h3>{props.data.title}</h3>
      <p>{props.data.synopsis}</p>
    </div>
  );
}

export default HomeCard;
