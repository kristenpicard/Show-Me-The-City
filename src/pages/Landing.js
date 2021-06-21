import React from "react";
// import city from '../images/bw-city.jpg';
import { H1, LandContainer } from "../../src/components/styling/style";

const Landing = () => {
  return (
    <LandContainer className="text-center">
      {/* Image not rendering at the moment - needs fixed */}
      {/* styles={{ backgroundImage:`(${city})`}} */}
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
    </LandContainer>
  );
};

export default Landing;
