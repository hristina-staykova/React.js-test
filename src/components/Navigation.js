// export a navigation component (use react-router-dom)
import React from "react";
import { Link } from "react-router-dom";

function NavigationTabs() {
  return (
    <nav className="navbar bg-secondary navbar-expand">
      <ul className="navbar-nav">
        <li className="nav-item p-2">
          <Link to="/home" className="text-white">
            Home
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link to="/modeler" className="text-white">
            Modeler
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link to="/framework" className="text-white">
            Framework
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationTabs;
