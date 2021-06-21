import React from "react";
import RecForm from "../components/RecForm";
import { GeneralContainer } from "../components/styling/style";
import NavBar from "../components/NavBar/index"

const CreateRec = () => {
  return (
    <>
    <NavBar />

    <GeneralContainer>
      <a href="backapage">Back to Profile</a>
      <br></br>
      <br></br>
      <RecForm />
    </GeneralContainer>
    </>
  );
};

export default CreateRec;
