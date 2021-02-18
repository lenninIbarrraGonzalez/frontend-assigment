import React from 'react';

const ActionsBottons = () => (
  <div className="actionsBottons">
    <button type='button'>
      <i className="far fa-star actionsBottons--icon">
        {' '}
        <h5>Destacar</h5>
        {' '}
      </i>
    </button>
    <button type='button'>
      <i className="far fa-comment-alt  actionsBottons--icon">
        {' '}
        <h5>Comentar</h5>
      </i>
    </button>
    <button type='button'>
      <i className="fas fa-external-link-square-alt  actionsBottons--icon">
        {' '}
        <h5>Compartir</h5>
      </i>
    </button>

  </div>
);

export default ActionsBottons;
