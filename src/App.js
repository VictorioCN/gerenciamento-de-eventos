import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './pages/EventList';
import ParticipantList from './pages/ParticipantList';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/eventos/:id/participantes" element={<ParticipantList />} />
      </Routes>
    </Router>
  );
}

export default App;
