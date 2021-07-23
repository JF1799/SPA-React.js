import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react/cjs/react.production.min";
// import { AuthContext } from "react";

export const Navbar = () => {
  // const {
  //   user: { name },
  // } = useContext(AuthContex);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        HEROES
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          {/* <p className="nav-item nav-link text-info"> {name}</p> */}
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
