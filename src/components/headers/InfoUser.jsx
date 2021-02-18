import React from 'react';
import avatar from '../../assets/images/avatarLenin.png';

const InfoUser = () => (
  <nav className="user">
    <div className="user__icon">
      <i className="far fa-bell" />
      <h6>1</h6>
    </div>

    <div className="user__avatar">
      <img src={avatar} alt="" className="user__avatar--img" />
      <i className="fas fa-angle-down" />
    </div>

    <i className="far fa-check-circle" />
  </nav>
);

export default InfoUser;
