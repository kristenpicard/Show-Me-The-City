import React, { useState } from "react";
import { Nav } from "../styling/style";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function NavBar(props) {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  // const history = useHistory();

  const login = props.login;

  // async function handleLogout() {
  //   setError("");

  //   try {
  //     await logout()
  //     history.push('/Login');
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }

  return (
    <>
      <Nav className="navbar">
        {login ? (
          <div>
          {/* if user not logged in */}
            <a className="login" href={props.login}>
              Login
            </a>
          </div> 
        ) : (
          <div>
            {/* if logged in */}
            <a className="profile" href={props.profile}>
              Profile
            </a>
            <a onClick={logout} className="logout" href={props.logoutLink}>
              Logout
            </a>
          </div>
        )}
      </Nav>
    </>

  );
}

export default NavBar;
