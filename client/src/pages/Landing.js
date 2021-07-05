import React from "react";
import { Link } from "react-router-dom";
import {
  Center,
  H1,
  LandContainer,
  Opacity,
} from "../../src/components/styling/style";

const style = {
  opacity: ".7",
};

const styleLink = {
  color: "white",
};

function Landing() {
  function onKeyDown() {
    <a href="./home"></a>
  }

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
    <LandContainer className="text-center">
      <Link style={styleLink} to="/login">
        Login or Sign Up
      </Link>
      <Opacity>
        <Center>
          <header>
            <H1>
              Show me
              <br></br>
              the city!
            </H1>
          </header>
          <input
            // search={this.state.search}
            // handleInputChange={this.handleInputChange}
            // handleFormSubmit={this.handleFormSubmit}
            style={style}
            className="searchBox"
            type="text"
            placeholder="Search for a city..."
            name="search"
            onKeyDown={(e) => e.key === "Enter" && onKeyDown}
          ></input>
        </Center>
      </Opacity>
    </LandContainer>
  );
}

export default Landing;
