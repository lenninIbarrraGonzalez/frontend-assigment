import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
  <div className="link">
    <Link to="/" className="link--enlace">
      Preguntas frecuentes
    </Link>
    <Link to="/" className="link--enlace">
      Contáctanos
    </Link>
    <Link to="/" className="link--enlace">
      Información
    </Link>
  </div>
);

export default Links;
