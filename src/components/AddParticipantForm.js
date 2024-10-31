import React, { useState } from 'react';

function AddParticipantForm({ eventoId, addParticipant }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email) {
      const newParticipant = { nome, email };
      addParticipant(newParticipant);
      setNome('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Adicionar Participante</button>
    </form>
  );
}

export default AddParticipantForm;
