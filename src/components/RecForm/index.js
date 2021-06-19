import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: #76ead7;
  background-color: #393e46;
  width: 70%;
`;

// Form for a user to add a recommendation/post
function RecForm() {
  return (
    <form className="new-review-form">
      <div className="form-group text-center">
        <Button
          type="submit"
          // className="btn-block"
        >
          Add a Photo
        </Button>
      </div>
      <div className="form-group">
        <label>City: </label>
        <input className="form-control" placeholder="Enter City" />
      </div>
      <div className="form-group">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle btn-sm"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Category
          </button>
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
      <div className="form-group">
        <label>Headline: </label>
        <input className="form-control" placeholder="Enter Headline" />
      </div>
      <div className="form-group">
        <label>Short Intro: </label>
        <textarea className="form-control" placeholder="Enter Introduction" />
      </div>
      <div className="form-group">
        <label>List: </label>
        <div class="form-row">
          <input className="form-control col-1"></input>
          <div>&nbsp;&nbsp;</div>
          <input className="form-control col" />
        </div>
        <br></br>
        <button className="btn btn-light btn-small col-1.5">Add</button>
      </div>
      <div className="text-center">
        <Button
          type="submit"
          // className="btn-block"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default RecForm;
