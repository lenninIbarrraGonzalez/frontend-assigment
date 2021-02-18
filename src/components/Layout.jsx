import React from 'react';
import Footer from './footer/Footer';
import Header from './headers/Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <footer />
    <Footer />
  </div>
);

export default Layout;
