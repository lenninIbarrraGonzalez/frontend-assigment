import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const TittleArticle = () => {
  const { state } = useContext(AppContext);
  const { info } = state;

  return (
    <div className="tittleArticle">
      <h3>{info.title}</h3>
      <botton type="button" className="tittleArticle__botton">
        Guardar
      </botton>
    </div>
  );
};

export default TittleArticle;
