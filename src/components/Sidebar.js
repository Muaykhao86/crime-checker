import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <a href="/" className="sidebar-brand">
          <FontAwesomeIcon
            className="mr-10"
            size="2x"
            icon={["fas", "user-secret"]}
          />
          Crime Checker
        </a>
        {/* <div className="sidebar-content">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="mt-10 font-size-12">
            Press <kbd>/</kbd> to focus
          </div>
        </div> */}
        <h5 className="sidebar-title">Getting started</h5>
        <div className="sidebar-divider"></div>
        <a href="/" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">
            <i className="fa fa-terminal" aria-hidden="true"></i>
          </span>
          About
        </a>
        <h5 className="sidebar-title">Security</h5>
        <div className="sidebar-divider"></div>
        <a href="/" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">
            <i className="fa fa-folder-open-o" aria-hidden="true"></i>
          </span>
          Home Security
        </a>
        <a href="/" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">
            <i className="fa fa-table" aria-hidden="true"></i>
          </span>
          Personal Protection
        </a>
        <a href="/" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">
            <i className="fa fa-map-o" aria-hidden="true"></i>
          </span>
          Your Locale Force
        </a>
        <a href="/" className="sidebar-link sidebar-link-with-icon">
          <span className="sidebar-icon">
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
          </span>
          More Information
        </a>
      </div>
    </div>
  );
}
