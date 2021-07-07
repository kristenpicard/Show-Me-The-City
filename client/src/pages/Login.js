import React from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { LoginContainer } from "../components/styling/style";

var isLoggedIn = false;

const LoginPage = () => {
  return (
    <LoginContainer className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? (
        <h1>Hello</h1>
      ) : (
        <>
          <Login /> <Signup />
        </>
      )}
    </LoginContainer>
  );
};

export default LoginPage;
