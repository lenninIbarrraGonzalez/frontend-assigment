import React from 'react'
import Footer from './Footer';
import Header from './headers/Header';


const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children}
    <footer />
    <Footer />
  </div>
)

export default Layout;