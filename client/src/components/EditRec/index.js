import React, { useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import API from "../../utils/API";
import Cloudinary from "../Cloudinary";
import { Button, TextArea } from "../styling/style";

// Form for a user to add a recommendation/post
function EditForm(props) {
  const locationRef = useRef();
  const titleRef = useRef();
  const synopsisRef = useRef();
  const photo = props.photo;
  // created a variable and on load it is empty - default to empty
  let selectedCategory = "";

  // This function is taking the selected option and setting it
  // to a variable to be use in the post of the handleSubmit
  const handleSelect = (e) => {
    selectedCategory = e;
  };

  // add method to pass to Cloudinary - return state (value) of child component

  // or keep photo state here in parent element & pass handler to child

  const handleSubmit = (e) => {
    e.preventDefault();
    API.updatePost({
      title: titleRef.current.value,
      location: locationRef.current.value,
      synopsis: synopsisRef.current.value,
      category: selectedCategory,
      image: photo,
    })
      .then((res) => {})
      .catch((err) => console.log(err));

    titleRef.current.value = "";
    locationRef.current.value = "";
    synopsisRef.current.value = "";
  };
  return (
    <form className="new-review-form" onSubmit={handleSubmit}>
      <div className="form-group text-center">
        <Cloudinary photo={props.photo} setPhoto={props.setPhoto} />
      </div>
      <label>City: </label>
      <input
        ref={locationRef}
        className="col-12 form-group"
        type="text"
        value={props.location}
      />

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

      <label>Headline: </label>
      <input
        ref={titleRef}
        className="col-12 form-group"
        type="text"
        value={props.title}
      />
      <div className="form-group">
        <label>Short Intro: </label>
        <TextArea
          ref={synopsisRef}
          className="form-control"
          type="text"
          value={props.synopsis}
        />
      </div>

      <div className="text-center">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

export default EditForm;
