import "./Sucursales.css";

const sucursales = [
  {
    ciudad: "Ciudad de México",
    direccion: "Av. Reforma 123, CDMX",
    telefono: "+52 55 1234 5678",
    mapa: "https://www.google.com/maps?q=Ciudad+de+Mexico&output=embed"
  },
  {
    ciudad: "Hidalgo",
    direccion: "Pachuca Centro, Hidalgo",
    telefono: "+52 771 456 7890",
    mapa: "https://www.google.com/maps?q=Hidalgo,Mexico&output=embed"
  },
  {
    ciudad: "Guadalajara",
    direccion: "Zona Norte, Guadalajara",
    telefono: "+52 33 9876 5432",
    mapa: "https://www.google.com/maps?q=Guadalajara&output=embed"
  },
  {
    ciudad: "Monterrey",
    direccion: "Área Metropolitana, Monterrey",
    telefono: "+52 81 6543 2109",
    mapa: "https://www.google.com/maps?q=Monterrey&output=embed"
  },
  {
    ciudad: "Puebla",
    direccion: "Plaza Central, Puebla",
    telefono: "+52 222 789 4561",
    mapa: "https://www.google.com/maps?q=Puebla&output=embed"
  }
];

function Sucursales() {
  return (
    <section className="seccion sucursales-seccion">
      <h2 className="titulo">Nuestras Sucursales</h2>

      <div className="sucursales-grid">
        {sucursales.map((sucursal, index) => (
          <div className="sucursal-card" key={index}>

            <div className="mapa-container">
              <iframe
                src={sucursal.mapa}
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={sucursal.ciudad}
              ></iframe>
            </div>

            <div className="sucursal-info">
              <h3>{sucursal.ciudad}</h3>
              <p><strong>Dirección:</strong> {sucursal.direccion}</p>
              <p><strong>Teléfono:</strong> {sucursal.telefono}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Sucursales;