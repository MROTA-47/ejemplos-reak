import "./Sucursales.css";

function Sucursales() {
  return (
    <section className="seccion sucursales-seccion">
      <h2>Sucursales</h2>

      <div className="sucursales-grid">
        <div className="sucursal-card">
          <span className="icono">📍</span>
          <div className="sucursal-info">
            <h3>Ciudad de México</h3>
            <p>Centro</p>
          </div>
        </div>

        <div className="sucursal-card">
          <span className="icono">📍</span>
          <div className="sucursal-info">
            <h3>Guadalajara</h3>
            <p>Zona Norte</p>
          </div>
        </div>

        <div className="sucursal-card">
          <span className="icono">📍</span>
          <div className="sucursal-info">
            <h3>Monterrey</h3>
            <p>Área Metropolitana</p>
          </div>
        </div>

        <div className="sucursal-card">
          <span className="icono">📍</span>
          <div className="sucursal-info">
            <h3>Puebla</h3>
            <p>Plaza Central</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sucursales;