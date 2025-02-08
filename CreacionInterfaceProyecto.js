// CreacionInterfaceProyecto.js
import React, { useState } from 'react';
import './CreacionInterfaceProyecto.css';

const CreacionInterfaceProyecto = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del proyecto al backend
    console.log('Proyecto creado:', { projectName, projectDescription, startDate, endDate });
  };

  return (
    <div className="create-project-container">
      <h2>Crear Nuevo Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Nombre del Proyecto:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Descripción:</label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Fecha de inicio:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Fecha de finalización:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Proyecto</button>
      </form>
    </div>
  );
};

export default CreacionInterfaceProyecto;