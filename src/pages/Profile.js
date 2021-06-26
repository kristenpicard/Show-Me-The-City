import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import NavBar from "../components/NavBar/index";
import { Link } from "react-router-dom";
import {
  CreateCard,
  GeneralContainer,
  ProfileCard,
  ProfileHeader,
} from "../components/styling/style";

const Profile = () => {
  
  const [error, setError] = useState("");
  const { currentUser } = useAuth()
  
  return (
    <>
      <NavBar />
      <GeneralContainer>
        <ProfileHeader className="text-center">My Profile</ProfileHeader>
        <p>Name: John Smith</p>
        <i className="fas fa-edit"></i>

        <p>Email: {currentUser.email}</p>
        <i className="fas fa-edit"></i>


        <Link to="/update-profile" className="btn btn primary w-100 mt-3">Update Profile</Link>
        <ProfileHeader classNameName="text-center">
          My Recommendations
        </ProfileHeader>
        <div className="container-fluid">
          <div className="row flex-row flex-nowrap">
            <div className="col-5">
              <CreateCard className="card card-block text-center">
                + Create
              </CreateCard>
            </div>
            <div className="col-5">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 ✰
              </ProfileCard>
            </div>
            <div className="col-5">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 ✰
              </ProfileCard>
            </div>
            ...
          </div>
        </div>
        <ProfileHeader classNameName="text-center">My Favorites</ProfileHeader>
        <div className="container-fluid">
          <div className="row flex-row flex-nowrap">
            <div className="col-5">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 ✰
                <br></br>
                City Name
              </ProfileCard>
            </div>
            <div className="col-5">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 ✰
                <br></br>
                City Name
              </ProfileCard>
            </div>
            <div className="col-5">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 ✰
                <br></br>
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
