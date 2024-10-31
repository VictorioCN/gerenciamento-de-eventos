import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import eventsData from '../data/events.json';

function EventList() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setEventos(eventsData.eventos);
  }, []);

  return (
    <div className="event-list">
      <h1>Eventos</h1>
      <ul>
        {eventos.map(evento => (
          <EventCard key={evento.id} evento={evento} />
        ))}
      </ul>
    </div>
  );
}

export default EventList;
