import React, { useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import API from "../../utils/API";
import Cloudinary from "../Cloudinary";
import { Button, TextArea } from "../styling/style";

// Form for a user to add a recommendation/post
function RecForm(props) {
  console.log(props.photo);
  const locationRef = useRef();
  const titleRef = useRef();
  const synopsisRef = useRef();
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
    API.createPost({
      title: titleRef.current.value,
      location: locationRef.current.value,
      synopsis: synopsisRef.current.value,
      category: selectedCategory,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    titleRef.current.value = "";
    locationRef.current.value = "";
    synopsisRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group text-center">
        <Cloudinary photo={props.photo}/>
        {/* <Button type="file" onClick={Cloudinary.handleChangeEvent}>Add a Photo</Button> */}
        
      </div>

      <label>City: </label>
      <input
        ref={locationRef}
        className="col-12 form-group"
        type="text"
        placeholder="Enter City"
      />
      <div className="form-group">

        <DropdownButton
          alignRight
          title="Category"
          id="dropdownMenuButton"
          // This is the event listener which calls handleSelect when option is chosen
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
          <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
          <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
        </DropdownButton>
      </div>

      <label>Headline: </label>
      <input
        ref={titleRef}
        className="col-12 form-group"
        type="text"
        placeholder="Enter Headline"
      />

      <div className="form-group">
        <label>Short Intro: </label>
        <TextArea
          ref={synopsisRef}
          className="form-control"
          type="text"
          placeholder="Enter Introduction"
        />
      </div>
      <div className="text-center">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default RecForm;
