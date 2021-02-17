import React from 'react';
import Search from './Search';
import Menu from './Menu';
import Logo from '../Logo';
import InfoUser from './InfoUser';
import TopMenu from '../TopMenu';

const Header = () => (
  <div className="header">
    <div className="header__left">
      <Logo />
      <Search />
      <Menu />
    </div>
    <div className="header__rigth">
      <InfoUser />
      <TopMenu />
    </div>
  </div>
);

export default Header;
