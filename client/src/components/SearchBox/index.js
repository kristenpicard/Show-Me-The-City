import React, { useRef } from "react";
import { InputGroup } from "react-bootstrap";
import { TopSearch } from "../styling/style";

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
      <InputGroup style={style} className="mb-3">
        <input
          className="col-9"
          placeholder="Search new city..."
          ref={locationRef}
        />
        <InputGroup.Append>
          <button onClick={handleClick} id="basic-addon2">
            Search
          </button>
        </InputGroup.Append>
      </InputGroup>
    </TopSearch>
  );
};

export default SearchBox;
