import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-light border-bottom border-success border-2 shadow">
      {/* <nav className="navbar bg-light border-bottom border-success border-2 shadow fixed-top"> */}
      <div className="container-fluid">
        <a href="/" className="navbar-brand fw-bolder text-success">
          Kelas Food
        </a>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link link-dark fw-semibold">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/list-menu"
              className="nav-link link-dark fw-semibold ms-sm-5"
            >
              List Menu
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark fw-semibold ms-sm-5">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
