import React from "react";
import EditForm from "../components/EditRec";
import { GeneralContainer, BackToProfile } from "../components/styling/style";
import NavBar from "../components/NavBar/index"

const EditRec = () => {
  return (
    <>
    <NavBar />
    <GeneralContainer>
      <BackToProfile>
      <a href="backapage">Back to Profile</a>
      </BackToProfile>
      <br></br>
      <br></br>
      <EditForm />
    </GeneralContainer>
    </>
  );
};

export default EditRec;
