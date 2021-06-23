import React from "react";
import {Nav} from "../styling/style"

function NavBar(props) {
    return (
                <Nav className="navbar">
                {/* user ternary here */}
                <div>
                    {/* if user not logged in */}
                    <a className="login" href="/login">Login</a>
                </div>
                <div>
                    {/* if logged in */}
                    <a className="profile" href="/profile">Profile</a>
                    <a className="logout" href="/">Logout</a>
                </div>
                <div>
                    {/* if on /profile */}
                    <a className="home" href="/home">Home</a>
                    <a className="logout" href="/">Logout</a>
                </div>
                </Nav>
    )
}

export default NavBar;