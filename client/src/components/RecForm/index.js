import React, { useRef } from "react";
import Cloudinary from "../Cloudinary";

import { Button, DDButton, TextArea } from "../styling/style";

import API from "../../utils/API";



// Form for a user to add a recommendation/post
function RecForm() {
  const locationRef = useRef();
  const titleRef = useRef();

  const synopsisRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    API.createPost({
      title: titleRef.current.value,
      location: locationRef.current.value,
      synopsis: synopsisRef.current.value,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err));

    titleRef.current.value = '';
    locationRef.current.value = '';
    synopsisRef.current.value = '';
  }


  return (
    <form className="new-review-form" onSubmit={handleSubmit}>
      <div className="form-group text-center">
        <Cloudinary />
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
        <div className="dropdown">
          <DDButton
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Category
          </DDButton>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="item1">
              Action
            </a>
            <a className="dropdown-item" href="item2">
              Another action
            </a>
            <a className="dropdown-item" href="item3">
              Something else here
            </a>
          </div>
        </div>
      </div>

      <label ref={titleRef}>Headline: </label>
      <input
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
