import React, { useState } from "react";
import { Nav } from "../styling/style";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function NavBar(props) {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout()
      history.push('/Login');
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Nav className="navbar">
      {/* user ternary here */}
      <div>
        {/* if user not logged in */}
        <a className="login" href="/login">
          Login
        </a>
      </div>
      <div>
        {/* if logged in */}
        <a className="profile" href="/profile">
          Profile
        </a>
        <a className="logout" href="/">
          Logout
        </a>
      </div>
      <div>
        {/* if on /profile */}
        <a className="home" href="/home">
          Home
        </a>
        <a className="logout" href="/">
          Logout
        </a>
      </div>
    </Nav>
  );
}

export default NavBar;
