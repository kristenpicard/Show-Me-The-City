import React from "react";
import { GeneralContainer } from "../components/styling/style";


const Profile = () => {
  return (
    <GeneralContainer>
      <h1>My Profile</h1>
      <p>Name: John Smith</p>
      <p>Email: username@gmail.com</p>
      <h1>My Recommendations</h1>
      <h1>My Favorites</h1>
    </GeneralContainer>
  );
};

export default Profile;
