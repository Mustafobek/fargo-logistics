import React, {useEffect, useState} from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";
import "../js/Navbar";

const Navbar = (props) => {
  const navigate = useNavigate();

  const onLogoutCLick = (ev) => {
    ev.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>

      <div id={"body-pd"}>
        <header className="header" id="header">
          <div className="header_toggle">
            <i className="bx bx-menu" id="header-toggle" />
          </div>
        </header>
        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              <Link to="/main" className="nav_logo">
                <i className="bx bx-layer nav_logo-icon" />
                <span className="nav_logo-name">Fargo</span>
              </Link>
              <div className="nav_list">
                <Link to="/create-order" className="nav_link">
                  <i className="bx bx-grid-alt nav_icon" />
                  <span className="nav_name">Create</span>
                </Link>
                <Link to="/completed" className="nav_link">
                  <i className="bx bx-user nav_icon" />
                  <span className="nav_name">Completed</span>
                </Link>
                <Link to="/admin/post" className="nav_link">
                  <i className="bx bx-git-branch nav_icon" />
                  <span className="nav_name">Филиалы</span>
                </Link>
                <Link to="/admin/vendor" className="nav_link">
                  <i className="bx bx-barcode nav_icon" />
                  <span className="nav_name">Код продукта</span>
                </Link>
              </div>
            </div>
            <button className="nav_link" onClick={onLogoutCLick}>
              <i className="bx bx-log-out nav_icon" />
              <span className="nav_name">Выйти</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
