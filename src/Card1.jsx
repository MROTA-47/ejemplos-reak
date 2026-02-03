import Card1 from "./Card1";

function ContenedorCards({ user }) {
  return (
    <div className="contenedor-cards">
      <Card1 user={user} />
    </div>
  );
}

export default ContenedorCards;