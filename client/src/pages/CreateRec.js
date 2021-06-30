import React from "react";
import RecForm from "../components/RecForm";
import { ViewContainer } from "../components/styling/style";
import NavBar from "../components/NavBar/index"

const CreateRec = (props) => {
  console.log(props);
  return (
    <>
    <NavBar />

    <ViewContainer>
      <a href="backapage">Back to Profile</a>
      <br></br>
      <br></br>
      <RecForm photo={props.photo}/>
    </ViewContainer>
    </>
  );
};

export default CreateRec;
