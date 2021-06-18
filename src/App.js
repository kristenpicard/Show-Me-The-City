import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import Edit from "./pages/edit";
import ViewRecommendation from "./pages/ViewRecommenation";
import ViewFavorite from "./pages/ViewFavorite";


function App() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/login">Login or Sign Up</Link>
        </div>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/create" component={Create} />
            <Route path="/edit" component={Edit} />
            <Route path="/view-recommendation" component={ViewRecommendation} />
            <Route path="/view-favorite" component={ViewFavorite} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
