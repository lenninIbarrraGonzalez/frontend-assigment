import React from 'react'
import avatar from '../../assets/images/avatarLenin.png';

const InfoUser = () => (
  <nav className='user'>
    <i className="far fa-bell" />
    <img src={avatar} alt="" className='user__avatar' />
    <i className="fas fa-angle-down" />
  </nav>
)

export default InfoUser
