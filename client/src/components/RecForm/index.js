import React, { useRef } from "react";
import Cloudinary from "../Cloudinary";
import { Button, DDButton, TextArea } from "../styling/style";

// Form for a user to add a recommendation/post
function RecForm() {
  const locationRef = useRef();
  const titleRef = useRef();
  return (
    <form className="new-review-form">
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
          className="form-control"
          type="text"
          placeholder="Enter Introduction"
        />
      </div>
      <div className="form-group">
        <label>List: </label>
        <div className="form-row">
          <input className="form-group col-1" type="text" />
          <div>&nbsp;&nbsp;</div>
          <input className="form-group col" type="text" />
        </div>

        <button className="btn btn-small col-1.5">Add</button>
      </div>
      <div className="text-center">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default RecForm;
