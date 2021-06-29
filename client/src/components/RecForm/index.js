import React from "react";
import { Button, DDButton, TextArea } from "../styling/style";
import Cloudinary from "../Cloudinary";

// Form for a user to add a recommendation/post
function RecForm() {
  return (
    <form className="new-review-form">
      <div className="form-group text-center">
        <Cloudinary />
        {/* <Button type="file" onClick={Cloudinary.handleChangeEvent}>Add a Photo</Button> */}
      </div>
     
      <label>City: </label>
      <input
        className="col-12 form-group"
        type="text"
        value="Enter City"
      />
      <div className="form-group">
        <div class="dropdown">
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
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="item1">
              Action
            </a>
            <a class="dropdown-item" href="item2">
              Another action
            </a>
            <a class="dropdown-item" href="item3">
              Something else here
            </a>
          </div>
        </div>
      </div>
      <label>Headline: </label>
      <input className="col-12 form-group" type="text" value="Enter Headline" />
      <div className="form-group">
        <label>Short Intro: </label>
        <TextArea
          className="form-control"
          type="text"
          value="Enter Introduction"
        />
      </div>
      <div className="form-group">
        <label>List: </label>
        <div class="form-row">
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
