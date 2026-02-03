function Tarjeta(props) {
  return (
    <div className="card">
      <img src={props.imagen} alt={props.nombre} />
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Tarjeta;