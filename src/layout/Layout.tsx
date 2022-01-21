import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './Layout.css';

export function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div className="banner" />
      {children}
      <Footer />
    </>
  );
}
