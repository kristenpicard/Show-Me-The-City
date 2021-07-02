import React from "react";
import {
  Center,
  H1,
  LandContainer,
  Opacity,
} from "../../src/components/styling/style";
import { Link } from "react-router-dom"
import { LandingLinks } from "../components/styling/style";

const style = {
  opacity: '.7'
}

function Landing() {
  function onKeyDown() {
    window.location.href = "https://www.google.com";
  }

  return (
    <LandContainer className="text-center">
      <LandingLinks className="text-center">
          <Link to="/login">Login or Sign Up</Link>
      </LandingLinks>
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
            style={style}
            className="searchBox"
            type="text"
            placeholder="Search for a city.."
            name="search"
            onKeyDown={(e) => e.key === "Enter" && onKeyDown}
          ></input>
        </Center>
      </Opacity>
    </LandContainer>
  );
}

export default Landing;
