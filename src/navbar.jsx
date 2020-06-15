import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PeoplePage from "./PeoplePage";
import PlanetsPage from "./PlanetsPage";
import StarshipsPage from "./StarshipsPage";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Navbar = () => {
  const NoMatch = ({ location }) => (
    <div>
      <h3>Error! No page found</h3>
      <h4>
        No match for <code>{location.pathname}</code>
      </h4>
    </div>
  );
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">JEDI</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/people" class="nav-link">
                People
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/planets" class="nav-link">
                Planets
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/starships" class="nav-link">
                Starships
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Redirect exact path="/" to="/people"></Redirect>
        <Route exact path="/people">
          {" "}
          <PeoplePage></PeoplePage>{" "}
        </Route>
        <Route exact path="/planets">
          {" "}
          <PlanetsPage></PlanetsPage>{" "}
        </Route>
        <Route exact path="/starships">
          {" "}
          <StarshipsPage></StarshipsPage>{" "}
        </Route>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};
export default Navbar;
