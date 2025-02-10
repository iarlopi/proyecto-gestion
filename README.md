Relación del código con los objetivos del proyecto y su demostración:

Objetivo: 
Crear y configurar nuevos proyectos fácilmente

El componente "CreacionInterfaceProyecto" demuestra este objetivo 
- al proporcionar una interfaz de usuario intuitiva con campos claramente etiquetados para el nombre del proyecto, descripción, fecha de inicio y fecha de finalización;
- un formulario simple y directo que captura la información esencial para la creación un nuevo proyecto;
- validación de campos requeridos para asegurar que se proporcione la información necesaria.
Relación con el código:

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
  // ... otros campos del formulario
</form>
