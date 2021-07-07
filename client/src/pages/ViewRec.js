import React, {useEffect, useState} from "react";
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
import API from "../utils/API"

const ViewRec = (props) => {
  console.log(props.location.rec.recID);
  const recID = props.location.rec.recID;
console.log(props.location)

const [data, setData] = useState([]);


  useEffect(() => {
    API.getPost(recID)
    .then(res => {
      setData(res.data)
      console.log(res)
    })
  }, [recID])

  return (
    <>
      <NavBar />
      <ViewContainer>
        <BackToProfile>
          <a href="/profile">Back to Profile</a>
        </BackToProfile>
        <div className="container">
          <br></br>
          <ImgRec src={data.image} alt="bbq"></ImgRec>
          <RecContainer>
            <br></br>
            <div className="row text-center">
              <RecTitle className="col">{data.title}</RecTitle>
              <Fave href="test" className="col">
                500 ✰
              </Fave>
            </div>

            <RecBody className="container">
              <p>
                {data.synopsis}
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
