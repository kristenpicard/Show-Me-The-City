import React from "react";

// Form for a user to add a recommendation/post
function RecForm() {
  return (
    <form className="new-review-form">
    <div className="form-group">
      <button type="submit" className="btn-block">
        Add a Photo
      </button>
    </div>
    <div className="form-group">
      <label>City: </label>
      <input className="form-control" placeholder="Enter City" />
    </div>
    <div className="form-group">
      <label>Headline: </label>
      <input className="form-control" placeholder="Enter Headline" />
    </div>
    <div className="form-group">
      <label>Short Intro: </label>
      <textarea
        className="form-control"
        placeholder="Enter Introduction"
      />
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
      <button type="submit" className="btn-block">
        Submit
      </button>
    </div>
  </form>
  );
}

export default RecForm;