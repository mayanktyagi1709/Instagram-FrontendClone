import React from "react";
import "../styles/sidebar.scss";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import Sticky from "react-sticky-el";
import image from "../images/profile.jpg";

const Sidebar = () => {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="morgan.freeman"
          caption="Morgan Freeman"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
};

export default Sidebar;
