import React, { useRef, useState } from "react";
// import { State } from "react";
import { TopSearch } from "../styling/style";
import API from "../../utils/API";

const SearchBox = (props) => {
  // let cityValue;
  
  // const cityRef=useRef()
  // setCity(cityRef)

  // let searchRec = (query) => {
  //   API.getPosts(req, res)
  //     .then((res) =>
  //     // console.log(query)
  //     props.setCity(query))
  //     .catch((err) => console.error(err));
  // };

  // some function to capture input & store in variable
  // const searchRec = () => {
    // other stuff that sets cityValue
    // return cityValue;
  // }
  // API request with variable
  // API.getPosts({
  //     findAll(cityValue, res)
  // })


  // let handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   this.searchRec(this.state.search);
  // };
  return (
    <TopSearch>
      <input 
      // onChange={searchRec()}
        // search={this.state.search}
        // handleInputChange={this.handleInputChange}
        // handleFormSubmit={this.handleFormSubmit}
        className="col-12" type="text" placeholder="Search new city..." />
    </TopSearch>
  );
};

export default SearchBox;
