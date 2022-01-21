import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/posts" className="footer__logo">
        <Logo />
      </Link>
      <p className="footer__text">&copy;Warner Developers Programs 2022. All right reserved</p>
    </footer>
  );
}

export default Footer;
