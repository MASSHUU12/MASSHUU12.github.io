import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-title">
        <a href="/">Maciej</a>
      </div>
      <div className="header-elem">
        <div></div>
      </div>
      <div className="header-hamburger" id="hamburger">
        <span
          className="iconify"
          data-icon="ci:hamburger"
          data-width="42"
        ></span>
      </div>
      <div className="header-dropdown" id="header-dropdown">
        <div></div>
      </div>
    </header>
  );
};

export default Header;
