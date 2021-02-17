import React from 'react'
import Search from "./Search";
import Menu from './Menu';
import Logo from './Logo'
import InfoUser from './InfoUser';


const Header = () => (
  <div className='header'>
    <Logo />
    <Search />
    <Menu />
    <InfoUser />
  </div>
)

export default Header
