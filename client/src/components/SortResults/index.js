import React from "react";
import { DDButton, HomeTitle } from "../styling/style";

const SortResults = () => {
  return (
    <>
      <HomeTitle>Showing local favorites in COLUMBUS, OH</HomeTitle>
      <form>
        <input
          className="col-12 form-group"
          type="text"
          value="Search for an interest..."
        />
        <div className="row form-group">
          <div className="dropdown col">
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
              <a className="dropdown-item" href="/">
                Arts & Culture
              </a>
              <a className="dropdown-item" href="/">
                Bars
              </a>
              <a className="dropdown-item" href="/">
                Cinema
              </a>
              <a className="dropdown-item" href="/">
                Coffee & Tea
              </a>
              <a className="dropdown-item" href="/">
                Music
              </a>
              <a className="dropdown-item" href="/">
                Landmarks
              </a>
              <a className="dropdown-item" href="/">
                Restaurants
              </a>
              <a className="dropdown-item" href="/">
                Shopping
              </a>
            </div>
          </div>

          <div className="dropdown col">
            <DDButton
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              Rating
            </DDButton>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">{`< 100`}</a>
              <a className="dropdown-item" href="/">{`< 250`}</a>
              <a className="dropdown-item" href="/">{`> 500`}</a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SortResults;
