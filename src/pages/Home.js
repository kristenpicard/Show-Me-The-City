import React from "react";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import SortResults from "../components/SortResults";
import CardCarousel from "../components/CardCarousel";
import { GeneralContainer } from "../components/styling/style";


const Home = () => {
    return (
        <GeneralContainer>
            <NavBar />
            <SearchBox />
            <SortResults />
            <CardCarousel />
        </GeneralContainer>
    )
}

export default Home;