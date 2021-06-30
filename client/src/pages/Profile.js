import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/index";
import {
  CreateCard,
  GeneralContainer,
  ProfileCard,
  ProfileHeader,
  ProfileInfo
} from "../components/styling/style";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  return (
    <>
      <NavBar />
      <GeneralContainer>
        <ProfileHeader className="text-center">My Profile</ProfileHeader>
        <ProfileInfo>
        <p>Name: John Smith</p>
        <i className="fas fa-edit"></i>

        <p>Email: {currentUser.email}</p>
        <i className="fas fa-edit"></i>

        <Link to="/update-profile">
          Update Profile
        </Link>
        </ProfileInfo>
        <ProfileHeader classNameName="text-center">
          My Recommendations
        </ProfileHeader>
        <div className="container">
          <div className="row flex-row flex-nowrap">
            <div className="col">
              <CreateCard className="card text-center">
                + Create
              </CreateCard>
            </div>
            <div className="col">
              <ProfileCard className="card text-center">
                Card Title!
                <br></br>
                500 ✰
              </ProfileCard>
            </div>
            <div className="col">
              <ProfileCard className="card text-center">
                Card Title!
                <br></br>
                500 ✰
              </ProfileCard>
            </div>
            
          </div>
        </div>
        <ProfileHeader classNameName="text-center">My Favorites</ProfileHeader>
        <div className="container">
          <div className="row flex-row flex-nowrap">
            <div className="col">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 ✰<br></br>
                City Name
              </ProfileCard>
            </div>
            <div className="col">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 ✰<br></br>
                City Name
              </ProfileCard>
            </div>
            <div className="col">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 ✰<br></br>
                City Name
              </ProfileCard>
            </div>
          </div>
        </div>
      </GeneralContainer>
    </>
  );
};

export default Profile;
