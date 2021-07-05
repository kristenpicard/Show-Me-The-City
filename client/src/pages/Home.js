import React, { useState } from "react";
import CardCarousel from "../components/CardCarousel";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import SortResults from "../components/SortResults";
import { GeneralContainer } from "../components/styling/style";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {

  const [city, setCity] = useState("");
  const { currentUser, logout } = useAuth();

  const login = "/login";
  const profile = "/profile";
  const logoutLink = "/";

  return (
    <>
      {!currentUser ? 
        <NavBar isProfile={false} login={login} /> : <NavBar isProfile={false} profile={profile} logout={logoutLink} />
      }

      <SearchBox city={city} setCity={setCity}/>
      <GeneralContainer className="text-center">
        <SortResults />
        <CardCarousel city={city}/>
      </GeneralContainer>
    </>
  );
};

export default Home;
