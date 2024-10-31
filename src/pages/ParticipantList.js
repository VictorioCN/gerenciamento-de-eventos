import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddParticipantForm from '../components/AddParticipantForm';
import eventsData from '../data/events.json';

function ParticipantList() {
  const { id } = useParams();
  const [participantes, setParticipantes] = useState([]);
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    const eventoData = eventsData.eventos.find(e => e.id === parseInt(id));
    setEvento(eventoData);
    setParticipantes(eventsData.participantes[id] || []);
  }, [id]);

  const addParticipant = (participant) => {
    setParticipantes([...participantes, participant]);
  };

  if (!evento) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Participantes de {evento.titulo}</h1>
      <ul>
        {participantes.map((p, index) => (
          <li key={index}>{p.nome} - {p.email}</li>
        ))}
      </ul>
      <AddParticipantForm eventoId={id} addParticipant={addParticipant} />
    </div>
  );
}

export default ParticipantList;
