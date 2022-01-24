import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './Layout.css';

export function Layout({ children }: any) {
  return (
    <div className="layout">
      <div className="content">
        <Header />
        <div className="banner" />
        {children}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
