import React, { useState } from "react";
import NavBar from "../components/NavBar/index";
import RecForm from "../components/RecForm";
import {
  BackToProfile,
  FormFont,
  ViewContainer,
} from "../components/styling/style";

const CreateRec = () => {
  const [photo, setPhoto] = useState("https://via.placeholder.com/300x175");

  return (
    <>
      <NavBar />

      <ViewContainer>
        <BackToProfile>
          <a href="/profile">Back to Profile</a>
        </BackToProfile>
        <br></br>
        <br></br>
        <FormFont>
          <RecForm photo={photo} setPhoto={setPhoto} />
        </FormFont>
      </ViewContainer>
    </>
  );
};

export default CreateRec;
