import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  Center,
  H1,
  LandContainer,
  Opacity,
} from "../../src/components/styling/style";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";

const style = {
  opacity: ".7",
};

const styleLink = {
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  textDecorationColor: "white",
  color: "white"
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
          <div className="d-flex justify-content-center">
          <InputGroup className="mb-3">
            <FormControl
              ref={locationRef}
              style={style}
              className="searchBox"
              type="text"
              placeholder="Search for a city..."
              name="search"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={handleClick}><FaSearch /></Button>
            </InputGroup.Append>
          </InputGroup>
          </div>
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
