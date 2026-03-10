import "./Card.css";

function Card1({ nombre, imagen, descripcion }) {

  return (
    <div className="card">

      <img src={imagen} alt={nombre} />

      <h3>{nombre}</h3>

      <p>
        {descripcion.substring(0,100)}...
      </p>

      <button>Ver recetas</button>

    </div>
  );

}

export default Card1;