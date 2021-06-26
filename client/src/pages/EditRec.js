import React from "react";
import EditForm from "../components/EditRec";
import { GeneralContainer } from "../components/styling/style";
import NavBar from "../components/NavBar/index"

const EditRec = () => {
  return (
    <>
    <NavBar />
    <GeneralContainer>
      <a href="backapage">Back to Profile</a>
      <br></br>
      <br></br>
      <EditForm />
    </GeneralContainer>
    </>
  );
};

export default EditRec;
