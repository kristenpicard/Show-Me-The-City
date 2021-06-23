import React from "react";
import { Button, DDButton, TextArea } from "../styling/style";

// Form for a user to add a recommendation/post
function EditForm() {
  return (
    <form className="new-review-form">
    <div className="form-group text-center">
      <Button type="submit">
        Add a Photo
      </Button>
    </div>
    <label>City: </label>
      <input
        className="col-12 form-group"
        type="text"
        placeholder="Will be value.city"
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
      <input className="col-12 form-group" type="text" placeholder="Will be value.headline" />
      <div className="form-group">
        <label>Short Intro: </label>
        <TextArea
          className="form-control"
          type="text"
          placeholder="Will be value.intro"
        />
      </div>
      <div className="form-group">
        <label>List: </label>
        <div class="form-row">
          <input className="form-group col-1" type="text" />
          <div>&nbsp;&nbsp;</div>
          <input className="form-group col" type="text" placeholder="Will be value.list[0]" />
        </div>

        <button className="btn btn-small col-1.5">Add</button>
      </div>
    <div className="text-center">
        <Button type="submit">Save</Button>
      </div>
  </form>
  );
}

export default EditForm;