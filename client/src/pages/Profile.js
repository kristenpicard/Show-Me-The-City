import React, { useState } from "react";
import { Link } from "react-router-dom";
import FaveCard from "../components/FaveCard/index";
import NavBar from "../components/NavBar/index";
import RecCard from "../components/RecCard/index";
import {
  CreateCard,
  GeneralContainer,
  ProfileHeader,
  ProfileInfo,
} from "../components/styling/style";
import { useAuth } from "../contexts/AuthContext";

const style1 = {
  fontFamily: 'Fira Sans'
}
const style2 = {
  fontFamily: 'PT Serif Caption'
}
const style3 = {
  fontFamily: 'Hind Siliguri'
}


const Profile = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const [photo, setPhoto] = useState("https://via.placeholder.com/300x175");

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

          <Link to="/update-profile">Update Profile</Link>
        </ProfileInfo>
        <ProfileHeader classNameName="text-center">
          My Recommendations
        </ProfileHeader>
        <div className="container">
          <div className="row flex-row flex-nowrap">
            <div className="col">
              <CreateCard className="card text-center">
                <Link to={{ pathname: "/create", photo: { photo } }}>
                  + Create
                </Link>
              </CreateCard>
            </div>
            {/* Pseudo code to map recs!!!!! See RecCard also */}
            {/* {this.state.recommendations.map((data) => (
              <RecCard 
              title={data.title} 
              favorites={data.favorites}
               />
            ))} */}
          </div>
        </div>
        <ProfileHeader classNameName="text-center">My Favorites</ProfileHeader>
        <div className="container">
          <div className="row flex-row flex-nowrap">
            {/* Pseudo code to map favorites info!!!!! See FaveCard also */}
            {/* {this.state.recommendations.map((data) => (
              <FaveCard 
              title={data.title} 
              favorites={data.favorites}
              location={data.location}
               />
            ))} */}
          </div>
        </div>
      </GeneralContainer>
    </>
  );
};

export default Profile;
