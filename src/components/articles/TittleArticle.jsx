import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const TittleArticle = () => {
  const { state } = useContext(AppContext);
  const { info } = state;

  return (
    <div className="tittleArticle">
      <h3>{info.title}</h3>
      <button type="button" className="tittleArticle__botton">
        Guardar
      </button>
    </div>
  );
};

export default TittleArticle;
