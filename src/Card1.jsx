import "./Card.css";

function Card1({ titulo, descripcion }) {

  return (
    <div className="card">

      <img
        src="https://picsum.photos/300/200"
        alt="imagen"
      />

      <h3>{titulo}</h3>

      <p>
        {descripcion}
      </p>

      <button>
        Ver productos
      </button>

    </div>
  );
}

export default Card1;