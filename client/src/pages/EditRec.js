import React, { useState } from "react";
import EditForm from "../components/EditRec";
import NavBar from "../components/NavBar/index";
import { BackToProfile, GeneralContainer } from "../components/styling/style";

const EditRec = (props) => {
  const [photo, setPhoto] = useState("https://via.placeholder.com/300x175");
  const recID = props.location.recID.recID;
  const title = props.location.title.title;
  const image = props.location.image.image;
  const synopsis = props.location.synopsis.synopsis;
  const location = props.location.location.location;

  return (
    <>
      <NavBar />
      <GeneralContainer>
        <BackToProfile>
          <a href="/profile">Back to Profile</a>
        </BackToProfile>
        <br></br>
        <br></br>
        <EditForm
          photo={photo}
          setPhoto={setPhoto}
          recID={recID}
          image={image}
          title={title}
          synopsis={synopsis}
          location={location}
        />
      </GeneralContainer>
    </>
  );
};

export default EditRec;
