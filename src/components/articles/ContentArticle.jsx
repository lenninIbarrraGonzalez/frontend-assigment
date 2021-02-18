import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';

const ContentArticle = () => {
  const { state } = useContext(AppContext);
  const { info } = state;

  const texto = info.content;
 
  return (
    <div dangerouslySetInnerHTML={{
      __html: `${info.content}`,
    }}
    />

  );
}

export default ContentArticle
