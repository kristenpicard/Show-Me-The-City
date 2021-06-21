import styled from "styled-components";
import img from "../../images/bw-city.jpg";

export const Button = styled.button`
  color: #76ead7;
  background-color: #393e46;
  width: 70%;
`;

export const H1 = styled.h1`
  color: white;
`;

export const LandContainer = styled.div`
  padding-top: 30vh;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const GeneralContainer = styled.div`
  background-color: #eeeeee;
  background-position: center;
  height: 100vh;
  width: 100vw;
  font-color: #393e46;
  padding:8%;
  padding-top: 2%;
`;
