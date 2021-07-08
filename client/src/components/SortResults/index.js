import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { DDButton, HomeTitle, Input } from "../styling/style";

const style = {
  fontFamily: "Hind Siliguri",
};

const SortResults = (props) => {
  
  const handleSelect = (e) => {
    props.setSelectedCategory(e);
  };
  
  return (
    <>
      <HomeTitle>Showing local favorites in {props.location}</HomeTitle>
      <Form style={style}>
        <Form.Group>
          <Input
            className="col-12 input"
            type="text"
            placeholder="Search for an interest..."
          ></Input>
        </Form.Group>
        <div className="row form-group">
        <div className="form-group">
        <DropdownButton
          className="DDButton"
          alignRight
          title="Category"
          id="dropdownMenuButton"
          // This is the event listener which calls handleSelect when option is chosen
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="art">Art & Culture</Dropdown.Item>
          <Dropdown.Item eventKey="bars">Bars</Dropdown.Item>
          <Dropdown.Item eventKey="cinema">Cinema</Dropdown.Item>
          <Dropdown.Item eventKey="coffee">Coffee & Tea</Dropdown.Item>
          <Dropdown.Item eventKey="music">Music</Dropdown.Item>
          <Dropdown.Item eventKey="landmarks">Landmarks</Dropdown.Item>
          <Dropdown.Item eventKey="restaurants">Restaurants</Dropdown.Item>
          <Dropdown.Item eventKey="shopping">Shopping</Dropdown.Item>
        </DropdownButton>
      </div>
          </div>

          <div className="dropdown col">
            <DDButton
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              Rating
            </DDButton>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">{`< 100`}</a>
              <a className="dropdown-item" href="/">{`< 250`}</a>
              <a className="dropdown-item" href="/">{`> 500`}</a>
            </div>
          </div>
      </Form>
    </>
  );
};

export default SortResults;
