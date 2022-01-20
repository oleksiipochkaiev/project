import React, { Children } from 'react';
import Logo from '../images/Logo';
import './Layout.css';

function Layout({children}: any) {
  return (
    <>
      <header className="header header__container">
        <a href="/" className="header__logo">
          <Logo />
        </a>
      </header>
      <div className="banner"></div>

      {children}
      
      <footer className="footer container">
        <a href="/" className="footer__logo">
          <Logo />
        </a>
        <p className="footer__text">&copy;Warner Developers Programs 2022. All right reserved</p>
      </footer>
    </>
  )
}

export default Layout;