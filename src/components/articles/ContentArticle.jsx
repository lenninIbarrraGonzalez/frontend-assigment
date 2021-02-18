import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';

const ContentArticle = () => {
  const { state } = useContext(AppContext);
  const { info } = state;

  const text = info.content;

  return (
    <div
      className='contentArticle'
      dangerouslySetInnerHTML={{
        __html: `${text}`,
      }}
    />

  );
}

export default ContentArticle
