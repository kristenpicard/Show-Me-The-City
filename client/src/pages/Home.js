import React, { useState } from "react";
import CardCarousel from "../components/CardCarousel";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import SortResults from "../components/SortResults";
import { GeneralContainer } from "../components/styling/style";

const Home = () => {
  const [city, setCity] = useState("");
  return (
    <>
      <NavBar />
      <SearchBox city={city} setCity={setCity}/>
      <GeneralContainer className="text-center">
        <SortResults />
        <CardCarousel city={city}/>
      </GeneralContainer>
    </>
  );
};

export default Home;
