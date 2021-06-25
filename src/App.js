import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Create from "./pages/CreateRec";
import Edit from "./pages/EditRec";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ViewFavorite from "./pages/ViewFavorite";
import ViewRec from "./pages/ViewRec";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import { AuthProvider } from "../src/contexts/AuthContext";

function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  function handleInputChange(event) {
    const city = event.target.city;
    return city;
  }

  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthProvider>
      <div>
      <Router>
        <div>
          <Link to="/login">Login or Sign Up</Link>
        </div>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Landing handleInputChange={handleInputChange} />
              )}
            />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/home"
              component={() => <Home handleInputChange={handleInputChange} />}
            />
            <Route exact path="/profile" component={Profile} />
            <Route path="/create" component={Create} />
            <Route path="/edit" component={Edit} />
            <Route path="/view-recommendation" component={ViewRec} />
            <Route path="/view-favorite" component={ViewFavorite} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </div>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
