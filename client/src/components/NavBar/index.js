import React, { useState } from "react";
import { Nav } from "../styling/style";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function NavBar(props) {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  const login = props.login;
  const profile = props.isProfile;

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
    <>
      <Nav className="navbar">
        {profile ? (
          <>
            <a href="/home">Home</a>
            <a href='/' onClick={handleLogout}>Logout</a>
          </>
        ) : login ? (
          <>
            <a href="/login">Login</a>
          </>
        ) : (
          <>
            <a href="/profile">Profile</a>
            <a href="/" onClick={handleLogout}>Logout</a>
          </>
        )}
      </Nav>
    </>

  );
}

export default NavBar;
