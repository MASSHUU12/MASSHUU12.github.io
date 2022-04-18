import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div class="header-title">
        <a href="/">Maciej Gawrysiak</a>
      </div>
      <div id="header-elements" class="header-elem">
        <div v-html="headerElements()"></div>
      </div>
      <div class="header-hamburger" id="hamburger">
        <span class="iconify" data-icon="ci:hamburger" data-width="42"></span>
      </div>
      <div class="header-dropdown" id="header-dropdown">
        <div v-html="headerMobileElements()"></div>
      </div>
    </header>
  );
};

export default Header;
