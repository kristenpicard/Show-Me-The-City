import React from "react";

// Form for a user to add a recommendation/post
function EditForm() {
  return (
    <form className="new-review-form">
    <div className="form-group">
      <button type="submit" className="btn-block">
        Add a Photo
      </button>
    </div>
    <div className="form-group">
      <label>City: </label>
      <input className="form-control" placeholder="WILL BE rec.city" />
    </div>
    <div className="form-group">
      <label>Headline: </label>
      <input className="form-control" placeholder="WILL BE rec.headline" />
    </div>
    <div className="form-group">
      <label>Short Intro: </label>
      <textarea
        className="form-control"
        placeholder="WILL BE rec.intro"
      />
    </div>
    <div className="form-group">
      <label>List: </label>
      <div class="form-row">
        <input className="form-control col-1" placeholder="WILL BE rec.listitem.id"></input>
        <div>&nbsp;&nbsp;</div>
        <input className="form-control col" placeholder="WILL BE rec.listitem" />
      </div>
      <br></br>
      <button className="btn btn-light btn-small col-1.5">Add</button>
    </div>
    <div className="text-center">
      <button type="submit" className="btn-block">
        Save
      </button>
    </div>
  </form>
  );
}

export default EditForm;