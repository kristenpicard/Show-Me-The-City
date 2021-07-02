import React, { useState } from "react";
import EditForm from "../components/EditRec";
import { GeneralContainer, BackToProfile } from "../components/styling/style";
import NavBar from "../components/NavBar/index"

const EditRec = () => {

  const [photo, setPhoto] = useState("https://via.placeholder.com/300x175");

  return (
    <>
    <NavBar />
    <GeneralContainer>
      <BackToProfile>
      <a href="backapage">Back to Profile</a>
      </BackToProfile>
      <br></br>
      <br></br>
      <EditForm photo={photo} setPhoto={setPhoto}/>
    </GeneralContainer>
    </>
  );
};

export default EditRec;
