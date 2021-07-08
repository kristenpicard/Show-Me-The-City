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
    // <div style={style}>
    //   <div
    //     id="carouselExampleControls"
    //     className="carousel slide"
    //     data-ride="carousel"
    //   >
    //     <div className="carousel-inner">
    //       {data.length ? (
    //         data.map((x) => <HomeCard data={x} />)
    //       ) : (
    //         <div> Loading... </div>
    //       )}
    //     </div>
    //     <a
    //       className="carousel-control-prev"
    //       href="#carouselExampleControls"
    //       role="button"
    //       data-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a
    //       className="carousel-control-next"
    //       href="#carouselExampleControls"
    //       role="button"
    //       data-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="sr-only">Next</span>
    //     </a>
    //   </div>
    // </div>

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
