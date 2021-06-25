import React from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

var isLoggedIn = false;

const LoginPage = () => {
  


  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? (
        <h1>Hello</h1>
      ) : (
        <>
          <Login /> <Register />
        </>
      )}
    </div>
  );
};

export default LoginPage;
