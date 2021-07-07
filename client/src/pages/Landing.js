import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
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

function Landing(props) {
  const history = useHistory();

  const locationRef = useRef();

  function handleClick() {
    props.setLocation(locationRef.current.value);
    history.push("/home");
  }

  return (
    <LandContainer className="text-center">
      <Opacity>
        <Center>
          <header>
            <H1>
              Show Me
              <br />
              the City
            </H1>
          </header>
          <br />
          <input
            ref={locationRef}
            style={style}
            className="searchBox"
            type="text"
            placeholder="Search for a city..."
            name="search"
          ></input>
          <button onClick={handleClick}>Search</button>
          <br />
          <br />
          <br />
          <a style={styleLink} href="/login">
            Login or Sign Up
          </a>
        </Center>
      </Opacity>
    </LandContainer>
  );
}

export default Landing;
