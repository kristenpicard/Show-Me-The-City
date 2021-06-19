import React from "react";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import SortResults from "./components/SortResults";
import CardCarousel from "./components/CardCarousel";

const Home = () => {
    return (
        <>
            <NavBar />
            <SearchBox />
            <SortResults />
            <CardCarousel />
        </>
    )
}

export default Home;