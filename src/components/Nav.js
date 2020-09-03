import React from "react";
import * as halfmoon from "halfmoon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  return (
    <nav className="navbar justify-content-between">
      <div className="navbar-content ">
        <button
          className="btn btn-action"
          type="button"
          onClick={() => halfmoon.toggleSidebar()}
        >
          <FontAwesomeIcon icon={["fas", "bars"]} />
          {/* <i className="fa fa-bars" aria-hidden="true"/> */}
          <span className="sr-only">Toggle sidebar</span>
        </button>
      </div>
      <div className="navbar-content">
        <FontAwesomeIcon size="2x" icon={["fas", "user-secret"]} />
      </div>
      <div className="navbar-content ">
        <div className="custom-switch mx-10 ">
          <input
            type="checkbox"
            id="switch-1"
            value=""
            onClick={() => halfmoon.toggleDarkMode()}
          />
          <label htmlFor="switch-1"></label>
        </div>
        <FontAwesomeIcon size="2x" icon={["far", "lightbulb"]} />
      </div>
    </nav>
  );
}
