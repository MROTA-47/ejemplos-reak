import './Contacto.css';
function Contacto() {
  return (
    <section className="seccion contacto">
      <h2>CONTACTO</h2>

      {}
      <div className="contacto-contenedor">
        
        {}
        <div className="info-contacto">
          <p><strong>Correo principal:</strong> contacto@otalker.dev</p>
          <p><strong>Correo alternativo:</strong> soporte@otalker.dev</p>
          <p><strong>Teléfono:</strong> +52 797 558 7980</p>
          <p><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 a.m. – 6:00 p.m.</p>
          <p><strong>Ubicación:</strong> Hidalgo, México</p>
        </div>

        {}
        <div className="form-card form-marco">
          <h3 className="form-title">Envíanos un mensaje</h3>

          <form className="formulario-contacto">
            <div className="campo">
              <label htmlFor="nombre">Nombre completo</label>
              <input id="nombre" type="text" required />
            </div>

            <div className="campo">
              <label htmlFor="correo">Correo electrónico</label>
              <input id="correo" type="email" required />
            </div>

            <div className="campo">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" type="tel" />
            </div>

            <div className="campo">
              <label htmlFor="asunto">Asunto</label>
              <select id="asunto" required>
                <option value="">Selecciona una opción</option>
                <option>Soporte técnico</option>
                <option>Colaboración</option>
                <option>Consulta general</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn-enviar">
              Enviar mensaje
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contacto;