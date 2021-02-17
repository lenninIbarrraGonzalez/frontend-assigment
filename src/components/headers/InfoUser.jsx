import React from 'react';
import avatar from '../../assets/images/avatarLenin.png';

const InfoUser = () => (
  <nav className="user">
    <i className="far fa-bell" />
    <div className="user__avatar">
      <img src={avatar} alt="" className="user__avatar--img" />
      <i className="fas fa-angle-down" />
    </div>

    <i className="far fa-check-circle" />
  </nav>
);

export default InfoUser;
