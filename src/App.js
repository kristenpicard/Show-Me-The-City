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
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import { AuthProvider } from "../src/contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute/index";

function App() {

  function handleInputChange(event) {
    const city = event.target.city;
    return city;
  }

  return (
    <div>
      <Router>
        <div>
          <Link to="/login">Login or Sign Up</Link>
        </div>
        <div>
          <AuthProvider>
            <Switch>
            <PrivateRoute
                exact
                path="/home"
                component={() => <Home handleInputChange={handleInputChange} />}
              />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute path="/create" component={Create} />
              <PrivateRoute path="/edit" component={Edit} />
              <PrivateRoute path="/view-recommendation" component={ViewRec} />
              <PrivateRoute path="/view-favorite" component={ViewFavorite} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route
                exact
                path="/"
                component={() => (
                  <Landing handleInputChange={handleInputChange} />
                )}
              />
              <Route exact path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
