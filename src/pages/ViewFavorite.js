import React from "react";
import "./style.css";
import bbqImage from "../../../public/bbqplaceholder.png";

const ViewFavorite = () => {
  return (
    <div>
      <a href="backapage">Back to Profile</a>
      <img src={bbqImage} alt="bbq"></img>
      <h1>Best BBQ!</h1>
      <button>Favorite</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
        diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <ul>
        <li>1. Lorem ipsum dolor sit amet</li>
        <li>2. consectetur adipiscing elit</li>
        <li>3. sed do eiusmod tempor</li>
        <li>4. incididunt ut labore et dolore</li>
        <li>5. Lorem ipsum dolor sit amet</li>
        <li>6. consectetur adipiscing elit</li>
        <li>7. sed do eiusmod tempor</li>
        <li>8. incididunt ut laboreet dolore</li>
        <li>9. Lorem ipsum dolor sit amet</li>
        <li>10. consectetur adipiscing elit</li>
      </ul>
      <button>Share</button>
    </div>
  );
};

export default ViewFavorite;
