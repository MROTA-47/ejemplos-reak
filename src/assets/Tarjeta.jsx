function Tarjeta({ imagen, nombre, descripcion }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} className="tarjeta-img" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Tarjeta;