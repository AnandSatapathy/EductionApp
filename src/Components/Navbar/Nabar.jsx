import React from "react";
import logo from "../../Images/LogoImages.png";
import logotext from "../../Images/Logotext.png";
import "./nabar.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img className="logo_img" src={logo} />
          <img className="logo_text" src={logotext} />
        </div>
        <div className="navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#Course">Course</a>
          </p>
          <p>
            <a href="#Help">Help</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
