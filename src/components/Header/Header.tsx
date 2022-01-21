import React from 'react';
import Logo from '../../images/Logo';
import './Header.css';

export interface HeaderProps {}

function Header() {
  return (
    <header className="header ">
      <div className="header__container">
        <a href="/">
          <Logo />
        </a>
      </div>
    </header>
  );
}

export default Header;
