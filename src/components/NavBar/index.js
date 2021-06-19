import React from "react";

function NavBar(props) {
    return (
        <>
            <nav>
                {/* user ternary here */}
                {/* if user not logged in */}
                <a className="login" href="/login">Login</a>
                {/* if logged in */}
                <a className="profile" href="/profile">Profile</a>
                <a className="logout" href="/">Logout</a>
            </nav>
        </>
    )
}

export default NavBar;