import React, { useEffect, useState } from "react";
import HomeCard from "../../components/HomeCard/index";
import API from "../../utils/API";
import Carousel from "react-bootstrap/Carousel";

const style = {
  fontFamily: "Hind Siliguri",
  overflowX: 'scroll'
};

const CardCarousel = (props) => {
  const data = props.data;
  console.log(data);
  return (

      <div style={style} className="row flex-row flex-nowrap">
          {data.length ? (
            data.map((x) => <HomeCard data={x} />)
          ) : (
            <div> Loading... </div>
          )}
        </div>

  );
};

export default CardCarousel;
