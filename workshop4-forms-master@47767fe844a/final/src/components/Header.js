import React from 'react';
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <span>Session 4 - Forms</span>
    </header>
  );

};

export default Header;
