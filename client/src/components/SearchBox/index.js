import React, { handleKeyDown } from "react";
// import { State } from "react";
import { TopSearch } from "../styling/style";
// import API from "../../utils/API";

const style = {
  fontFamily: 'Hind Siliguri'
}


const SearchBox = (props) => {

  const Input = () => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        console.log('Yas queen')
      }
    }
  }
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
      onKeyDown={handleKeyDown} 
        // onChange={searchRec()}
        // search={this.state.search}
        // handleInputChange={this.handleInputChange}
        // handleFormSubmit={this.handleFormSubmit} 
        className="col-12" type="text" style={style} placeholder="Search new city..." />
    </TopSearch>
  );
};

export default SearchBox;
