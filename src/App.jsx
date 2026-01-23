import Expresiones from "./assets/expresions";
import Encabezado from "./encabezado";

function App() {
  return (
    <div className="app">
      <Encabezado />
      <Expresiones/>

      <main>
        <h1>5C DSM</h1>
        <h2>Rene David Cabrera Gonzalez</h2>

        <p>
          Aplicación creada con React para prácticas de desarrollo web.
        </p>
      </main>
    </div>
  );
}

export default App;