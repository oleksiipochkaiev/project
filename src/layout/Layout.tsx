import React, { Children } from 'react';
import Logo from '../images/Logo';
import './Layout.css';

function Layout({children}: any) {
  return (
    <>
      <header className="header">
        <a href="/">
          <Logo />
        </a>
      </header>

      {children}
      
      <footer className="footer">
        <a href="/">
          <Logo />
        </a>
        <p>&copy;Warner Developers Programs 2022. All right reserved</p>
      </footer>
    </>
  )
}

export default Layout;