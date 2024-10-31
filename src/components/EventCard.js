import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ evento }) {
  return (
    <li>
      <h2>{evento.titulo}</h2>
      <p>{evento.data} | {evento.local}</p>
      <p>{evento.descricao}</p>
      <Link to={`/eventos/${evento.id}/participantes`}>Ver Participantes</Link>
    </li>
  );
}

export default EventCard;
