import React, { useRef } from "react";
import { Button, DDButton, TextArea } from "../styling/style";
import Cloudinary from "../Cloudinary";
import API from "../../utils/API";

// Form for a user to add a recommendation/post
function EditForm(props) {
  console.log(props);

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
      image: photo
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
    <form className="new-review-form" onSubmit={handleSubmit}>
    <div className="form-group text-center">
    <Cloudinary photo={props.photo} setPhoto={props.setPhoto}/>
    </div>
    <label>City: </label>
      <input
        ref={locationRef}
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
            onSelect={handleSelect}
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
      <label>Headline: </label>
      <input ref={titleRef} className="col-12 form-group" type="text" placeholder="Will be value.headline" />
      <div className="form-group">
        <label>Short Intro: </label>
        <TextArea
          ref={synopsisRef}
          className="form-control"
          type="text"
          placeholder="Will be value.intro"
        />
      </div>
      <div className="form-group">
        <label>List: </label>
        <div className="form-row">
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