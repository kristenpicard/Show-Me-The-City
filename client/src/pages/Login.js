import React from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

var isLoggedIn = false;

const LoginPage = () => {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? (
        <h1>Hello</h1>
      ) : (
        <>
          <Login /> <Signup />
        </>
      )}
    </div>
  );
};

export default LoginPage;
