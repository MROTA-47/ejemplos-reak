function Contacto() {
  return (
    <section className="seccion contacto">
      <h2>CONTACTO</h2>

      {/* Información de contacto */}
      <div className="info-contacto">
        <p><strong>Correo principal:</strong> contacto@otalker.dev</p>
        <p><strong>Correo alternativo:</strong> soporte@otalker.dev</p>
        <p><strong>Teléfono:</strong> +52 797 558 7980</p>
        <p><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 a.m. – 6:00 p.m.</p>
        <p><strong>Ubicación:</strong> Hidalgo, México</p>
      </div>

      {/* Formulario */}
      <form className="formulario-contacto">
        <div className="campo">
          <label>Nombre completo</label>
          <input type="text" placeholder="Escribe tu nombre" required />
        </div>

        <div className="campo">
          <label>Correo electrónico</label>
          <input type="email" placeholder="ejemplo@correo.com" required />
        </div>

        <div className="campo">
          <label>Teléfono</label>
          <input type="tel" placeholder="Tu número de contacto" />
        </div>

        <div className="campo">
          <label>Asunto</label>
          <select required>
            <option value="">Selecciona una opción</option>
            <option>Soporte técnico</option>
            <option>Colaboración</option>
            <option>Consulta general</option>
            <option>Otro</option>
          </select>
        </div>

        <div className="campo">
          <label>Mensaje</label>
          <textarea
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-enviar">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contacto;
