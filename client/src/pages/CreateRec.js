import React from "react";
import RecForm from "../components/RecForm";
import { ViewContainer, BackToProfile } from "../components/styling/style";
import NavBar from "../components/NavBar/index"

const CreateRec = (props) => {
  console.log(props);
  return (
    <>
    <NavBar />

    <ViewContainer>
      <BackToProfile>
      <a href="backapage">Back to Profile</a>
      </BackToProfile>
      <br></br>
      <br></br>
      <RecForm photo={props.photo}/>
    </ViewContainer>
    </>
  );
};

export default CreateRec;
