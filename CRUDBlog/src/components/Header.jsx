import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Header.css'


const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg --bs-primary-bg-subtle mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  to="/addblog"className="nav-link active" aria-current="page" href="#">
                  Add New Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link  to="/admin"className="nav-link active" aria-current="page">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
