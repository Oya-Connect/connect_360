import React from "react";
import Logo from '../../../public/images/logo.png'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo-container">
        <img className="navbar__logo" src={Logo} alt="navbar logo" />
      </div>
    </div>
  );
};

export default NavBar;
