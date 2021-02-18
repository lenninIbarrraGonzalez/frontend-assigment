import React from 'react';
import icon from '../../assets/images/icon-article.png';

const InfoArticles = () => (
  <div className="infoArticle">
    <img src={icon} alt="icono" />
    <div className="infoArticle__date">
      <h3>Noticia DocRed</h3>
      <div className="infoArticle__info">
        <h4>Hace 12 horas</h4>
        <h5>|</h5>
        <h4>Publicado 17/01/18</h4>
        <h5>|</h5>
        <h4>Lectura 3 min</h4>
      </div>
    </div>
  </div>
);

export default InfoArticles;
