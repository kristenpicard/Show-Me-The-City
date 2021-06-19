import React from "react";
// import city from '../images/bw-city.jpg';


const Landing = () => {
    return(
        <div>
        {/* Image not rendering at the moment - needs fixed */}
        {/* styles={{ backgroundImage:`(${city})`}} */}
        <header>
        <h1>Show me the city!</h1>
        </header>
        <input type="text" placeholder="Search for a city.." name="search"></input>
        </div>
    )
}

export default Landing;