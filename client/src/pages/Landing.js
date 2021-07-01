import React from "react";
import {
  Center,
  H1,
  LandContainer,
  Opacity,
} from "../../src/components/styling/style";

const style = {
  opacity: '.7'
}

function Landing() {
  function onKeyDown() {
    window.location.href = "https://www.google.com";
  }

  return (
    <LandContainer className="text-center">
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
