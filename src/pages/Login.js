import React from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

var isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime);

const LoginPage = () => {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      <Register />
      {/*AND Operator*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
};

export default LoginPage;
