import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className='menu'>
    <i className="fas fa-home" />
    <Link to='/'>Inicio</Link>
    <i className="fas fa-angle-down" />
  </nav>
)

export default Menu
