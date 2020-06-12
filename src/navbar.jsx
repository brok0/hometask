import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PeoplePage from "./PeoplePage";
import PlanetsPage from "./PlanetsPage";
import StarshipsPage from "./StarshipsPage";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Navbar = () => {
  return (
    <Router>
      <ul className="nav-justified" role="tablist">
        <li className="navbar-btn">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/people">PeoplePage</Link>
        </li>
        <li>
          <Link to="/planets">PlanetsPage</Link>
        </li>
        <li>
          <Link to="/starships">StarshipsPage</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          {" "}
        </Route>
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
      </Switch>
    </Router>
  );
};
export default Navbar;
