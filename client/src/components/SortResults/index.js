import React from "react";
import { Form } from "react-bootstrap";
import { DDButton, HomeTitle, Input } from "../styling/style";


const style = {
  fontFamily: 'Hind Siliguri'
}

const SortResults = () => {
  return (
    <>
      <HomeTitle>Showing local favorites in COLUMBUS, OH</HomeTitle>
      <Form style={style}>
        <Form.Group>
          <Input
            className="col-12 input"
            type="text"
            placeholder="Search for an interest..."
          ></Input>
        </Form.Group>
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
      </Form>
    </>
  );
};

export default SortResults;
