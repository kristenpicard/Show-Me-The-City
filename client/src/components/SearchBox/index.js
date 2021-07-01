import React from "react";
import { TopSearch } from "../styling/style";

const SearchBox = () => {
  return (
    <TopSearch>
      <input className="col-12" type="text" value="Search new city..." />
    </TopSearch>
  );
};

export default SearchBox;
