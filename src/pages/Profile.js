import React from "react";
import NavBar from "../components/NavBar/index";
import {
  CreateCard,
  GeneralContainer,
  ProfileCard,
  ProfileHeader,
} from "../components/styling/style";

const Profile = () => {
  return (
    <>
      <NavBar />
      <GeneralContainer>
        <ProfileHeader className="text-center">My Profile</ProfileHeader>
        <p>Name: John Smith</p>
        <i className="fas fa-edit"></i>

        <p>Email: username@gmail.com</p>
        <i className="fas fa-edit"></i>

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
                500 *
              </ProfileCard>
            </div>
            <div className="col-5">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 *
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
                500 *
              </ProfileCard>
            </div>
            <div className="col-5">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 *
              </ProfileCard>
            </div>
            <div className="col-5">
              <ProfileCard className="card card-block text-center">
                Card Title!
                <br></br>
                500 *
              </ProfileCard>
            </div>
            ...
          </div>
        </div>
      </GeneralContainer>
    </>
  );
};

export default Profile;
