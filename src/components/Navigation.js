import React from "react";

import Menu from "./Menu";
import "../styles/navigation.scss";
import logo from "../images/logo.png"
import searchIcon from "../images/searchIcon.png"

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container">
          <img className="logo" src={logo} alt="instagram logo"/>
          <div className="search">
              <img className="searchIcon" src={searchIcon} alt="search icon"/>
              <span className="searchText">Search</span>
          </div>
          <Menu/>
      </div>
    </div>
  );
};

export default Navigation;
