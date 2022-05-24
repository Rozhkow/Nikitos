import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import classNames from "classnames";
import logo from "../logoSvg.svg";
import "./Header.css";

const navItems = {
  HOME: "/",
  AMERICA: "/america",
  EUROPE: "/europe",
  ASIA: "/asia",
};

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="left-menu">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="menu-wrapper">
          <Link
            to={navItems.AMERICA}
            className={classNames("desctop", {
              active: pathname === navItems.AMERICA,
            })}
          >
            AMERICA
          </Link>
          <Link
            to={navItems.EUROPE}
            className={classNames("desctop", {
              active: pathname === navItems.EUROPE,
            })}
          >
            EUROPE
          </Link>
          <Link
            to={navItems.ASIA}
            className={classNames("desctop", {
              active: pathname === navItems.ASIA,
            })}
          >
            ASIA
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
