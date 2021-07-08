import React from "react";
import { Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {HomeTitle} from "../styling/style";

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
        <div className="d-flex justify-content-center">
        <DropdownButton
          className="DDButton"
          alignCenter
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
      </Form>
    </>
  );
};

export default SortResults;
