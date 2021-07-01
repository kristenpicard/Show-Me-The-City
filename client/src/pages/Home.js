import React from "react";
import CardCarousel from "../components/CardCarousel";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import SortResults from "../components/SortResults";
import { GeneralContainer } from "../components/styling/style";

const Home = () => {

  // searchRec = (query) => {
  //   API.getRec(query)
  //     .then((res) =>
  //       this.setState({
  //         recs: res.data.items.map((recData) => this.makeRec(recData)),
  //       })
  //     )
  //     .catch((err) => console.error(err));
  // };

  // handleInputChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   this.searchRec(this.state.search);
  // };

  return (
    <>
      <NavBar />
      <SearchBox 
        // search={this.state.search}
        // handleInputChange={this.handleInputChange}
        // handleFormSubmit={this.handleFormSubmit}
      />
      <GeneralContainer className="text-center">
        <SortResults />
        <CardCarousel />
      </GeneralContainer>
    </>
  );
};

export default Home;
