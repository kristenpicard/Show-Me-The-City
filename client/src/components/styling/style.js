import styled from "styled-components";
import img from "../../images/bw-city.jpg";

//This styles the words on the starting landing page of app
export const H1 = styled.h1`
  color: white;
`;

// This styles the starting landing page of app
export const LandContainer = styled.div`
  padding-top: 30vh;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

// This is a container used on many "views" of the app with same background color and padding
export const GeneralContainer = styled.div`
  background-color: #eeeeee;
  background-position: center;
  height: 100vh;
  width: 100vw;
  font-color: #393e46;
  padding: 8%;
  padding-top: 2%;
`;

// Styles the Navbar
export const Nav = styled.nav`
  background-color: #393e46;
  color: #76ead7;
  text-decoration: underline;
`;

// Styles Title on Home page
export const HomeTitle = styled.div`
  font-size: 25px;
  padding: 5%;
`;

// Styles the dropdown button
export const DDButton = styled.div`
  width: 35vw;
  color: #393e46;
  border-radius: 1px;
  background-color: white;
  height: 40px;
  border-color: #393e46;
`;

// Styles Button on Create Rec Page
export const Button = styled.button`
  color: #76ead7;
  background-color: #393e46;
  width: 70%;
`;

// Styles the textarea for intro of create rec
export const TextArea = styled.textarea`
  color: #393e46;
  border-radius: 1px;
  background-color: white;
  border-color: #393e46;
`;

// Styles Profile Titles
export const ProfileHeader = styled.div`
  font-weight: bold;
  font-size: 3vh;
  padding: 3vh;
`;

// Styles CREATE tile from profile My Recs
export const CreateCard = styled.div`
  height: 20vh;
  justify-content: center;
  width: 120px;
`;

// Styles myrecs and myfaves tiles from profile
export const ProfileCard = styled.div`
  height: 20vh;
  justify-content: center;
  background-color: #393e46;
  color: #76ead7;
  font-weight: bold;
  width: 120px;
`;

export const ImgRec = styled.img`
  width: 80vw;
`;

// This is a container used in the view-rec and view-fave pages
export const ViewContainer = styled.div`
  background-color: #eeeeee;
  width: 100vw;
  font-color: #393e46;
  padding: 8%;
  padding-top: 2%;
`;

// Container in single rec and fave
export const RecContainer = styled.div`
  background-color: #393e46;
  width: 80vw;
`;

// styles rec title
export const RecTitle = styled.h1`
  color: #76ead7;
  font-size: 6vw;
  font-weight: bold;
`;

// styles rec Favorite number and star
export const Fave = styled.a`
  color: #c4fb6d;
  font-size: 6vw;
  font-weight: bold;
`;

// styles rec body text
export const RecBody = styled.div`
  color: #eeeeee;
  font-size: 4vw;
`;

// styles rec edit button
export const EditBtn = styled.button`
  color: #393e46;
  background-color: #c4fb6d;
  margin: 10px;
  font-weight: bold;
  width: 40vw;
`;

// styles rec delete button
export const DelBtn = styled.button`
  color: #393e46;
  background-color: #ff1919;
  margin: 10px;
  font-weight: bold;
  width: 40vw;
`;
