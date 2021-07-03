import React, { useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import API from "../../utils/API";
import Cloudinary from "../Cloudinary";
import { Button, TextArea } from "../styling/style";
import { useAuth } from "../../contexts/AuthContext";

// Form for a user to add a recommendation/post
function RecForm(props) {
  console.log(props);
  const locationRef = useRef();
  const titleRef = useRef();
  const synopsisRef = useRef();
  const photo = props.photo;
  const user = useAuth();
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
      image: photo,
      userID: user.currentUser.uid
    })
      .then((res) => {
        console.log(user);
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
        <Cloudinary photo={props.photo} setPhoto={props.setPhoto}/>
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
          className="DDStyle"
          alignRight
          title="Category"
          id="dropdownMenuButton"
          // This is the event listener which calls handleSelect when option is chosen
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="option-1">Art & Culture</Dropdown.Item>
          <Dropdown.Item eventKey="option-2">Bars</Dropdown.Item>
          <Dropdown.Item eventKey="option-3">Cinema</Dropdown.Item>
          <Dropdown.Item eventKey="option-4">Coffee & Tea</Dropdown.Item>
          <Dropdown.Item eventKey="option-5">Music</Dropdown.Item>
          <Dropdown.Item eventKey="option-6">Landmarks</Dropdown.Item>
          <Dropdown.Item eventKey="option-7">Restaurants</Dropdown.Item>
          <Dropdown.Item eventKey="option-8">Shopping</Dropdown.Item>
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
