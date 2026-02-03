import Encabezado from "./encabezado";
import "./App.css";
import ContenedorCards from "./ContenedorCards";

function App() {

  const user = {
    name: "René David",
    rol: "Estudiante",
    grupo: "5C DSM"
  };

  return (
    <div className="pagina">
      <Encabezado />

      {/* AQUÍ SE PASAN LOS PROPS */}
      <ContenedorCards user={user} />

      <main className="contenido-principal">
        <h1>RENE DAVID CABRERA GONZALEZ 5C DSM</h1>
        <p>
          Prepárate para jugar sin límites que 
          en Xbox encontrarás los mejores juegos, ofertas exclusivas y experiencias
          que llevan el gaming al siguiente nivel.
        </p>
      </main>

      <section className="navegacion">
        <button className="btn izquierda">⬅ Izquierda</button>
        <button className="btn derecha">Derecha ➡</button>
      </section>
    </div>
  );
}

export default App;