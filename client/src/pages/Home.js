import React from "react";
import CardCarousel from "../components/CardCarousel";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import SortResults from "../components/SortResults";
import { GeneralContainer } from "../components/styling/style";

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBox />
      <GeneralContainer className="text-center">
        <SortResults />
        <CardCarousel />
      </GeneralContainer>
    </>
  );
};

export default Home;
