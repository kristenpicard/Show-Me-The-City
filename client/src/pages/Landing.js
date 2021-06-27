import React from "react";
import {
  Center,
  H1,
  LandContainer,
  Opacity,
} from "../../src/components/styling/style";

const Landing = () => {
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
            type="text"
            placeholder="Search for a city.."
            name="search"
          ></input>
        </Center>
      </Opacity>
    </LandContainer>
  );
};

export default Landing;
