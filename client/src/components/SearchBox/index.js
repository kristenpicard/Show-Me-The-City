import React, { useRef } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { TopSearch } from "../styling/style";
import { FaSearch } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const style = {
  fontFamily: "Hind Siliguri",
  fontWeight: 400,
};

const SearchBox = (props) => {
  const locationRef = useRef();

  function handleClick() {
    props.setLocation(locationRef.current.value);
  }
  return (
    <TopSearch>
    <div className="d-flex justify-content-center">
      <InputGroup className="mb-3">
        <FormControl
          ref={locationRef}
          style={style}
          className="searchBox"
          type="text"
          placeholder="Search new city..."
          name="search"
        />
        <InputGroup.Append>
        <Button variant="outline-secondary" onClick={handleClick}><FaSearch /></Button>
        </InputGroup.Append>
      </InputGroup>
      </div>
    </TopSearch>
  );
};

export default SearchBox;
