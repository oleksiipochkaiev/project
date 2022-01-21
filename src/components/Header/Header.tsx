import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo';
import './Header.css';

export interface HeaderProps {}

function Header() {
  return (
    <header className="header ">
      <div className="header__container">
        <Link to="/posts">
          <Logo />
        </Link>
      </div>
    </header>
  );
}

export default Header;
