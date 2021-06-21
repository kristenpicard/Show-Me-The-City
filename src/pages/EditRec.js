import React from "react";
import EditForm from "../components/EditRec";
import { GeneralContainer } from "../components/styling/style";


const EditRec = () => {
  return (
    <GeneralContainer>
      <a href="backapage">Back to Profile</a>
      <br></br>
      <br></br>
      <EditForm />
    </GeneralContainer>
  );
};

export default EditRec;
