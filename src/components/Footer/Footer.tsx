import React from 'react';
import Logo from '../../images/Logo';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="/" className="logo footer__logo">
        <Logo />
      </a>
      <p className="footer__text">&copy;Warner Developers Programs 2022. All right reserved</p>
    </footer>
  );
}

export default Footer;
