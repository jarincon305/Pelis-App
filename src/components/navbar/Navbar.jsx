import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark col-sm-12">
      <div className="navbar-collapse col-sm-12">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            to="/ejercicioOne"
          >
            Ejercicio One
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            to="/ejercicioTwo"
          >
            Ejercicio Two
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            to="/ejercicioThree"
          >
            Ejercicio Three
          </NavLink>

        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">Jefferson</span>
        </ul>
      </div>
    </nav>
  );
};
