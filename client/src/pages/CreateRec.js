import React, { useState } from "react";
import RecForm from "../components/RecForm";
import { ViewContainer, BackToProfile, FormFont } from "../components/styling/style";
import NavBar from "../components/NavBar/index"

const CreateRec = () => {

  const [photo, setPhoto] = useState("https://via.placeholder.com/300x175");

  return (
    <>
    <NavBar />

    <ViewContainer>
      <BackToProfile>
      <a href="backapage">Back to Profile</a>
      </BackToProfile>
      <br></br>
      <br></br>
      <FormFont>
      <RecForm photo={photo} setPhoto={setPhoto}/>
      </FormFont>
    </ViewContainer>
    </>
  );
};

export default CreateRec;
