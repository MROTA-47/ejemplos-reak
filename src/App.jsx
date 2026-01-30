import Encabezado from "./encabezado";
import "./App.css";

import cod from "./assets/Call-of-Duty-Logo-2012.png";
import halo from "./assets/halo-reach-logo-1-logo.png";
import gears from "./assets/gears-of-war-logo-vector-1.png";

function App() {
  return (
    <div className="pagina">

      <Encabezado />

      <section className="tarjetas">
        <div className="card">
          <img src={cod} alt="Call of Duty" />
          <h3>CALL OF DUTY</h3>
          <p>
            Call of Duty es la franquicia de juegos de disparo en primera persona conocida en todo el mundo por brindar el mejor entretenimiento a los jugadores durante décadas. Tanto los que exploran el mundo de Call of Duty por primera vez como los jugadores veteranos encontrarán una experiencia ideal para sus gustos.
          </p>
        </div>

        <div className="card">
          <img src={halo} alt="Halo Reach" />
          <h3>Halo Reach</h3>
          <p>
            Halo: Reach es un aclamado FPS de 2010 desarrollado por Bungie (actualmente parte de The Master Chief Collection) que sirve como precuela directa de Halo: Combat Evolved. Narra la trágica historia del Equipo Noble defendiendo el planeta Reach, bastión humano, contra la invasión del Covenant en 2552.
          </p>
        </div>

        <div className="card">
          <img src={gears} alt="Gears of War" />
          <h3>GEARS OF WAR</h3>
          <p>
            Gears of War es una aclamada saga de videojuegos de disparos en tercera persona (TPS) con temática de ciencia ficción bélica, desarrollada originalmente por Epic Games y centrada en combates tácticos de cobertura. Ambientada en el planeta Sera, narra la lucha desesperada de la humanidad contra los Locust, una amenaza subterránea.
          </p>
        </div>
      </section>

      <main className="contenido-principal">
        <h1> RENE DAVID CABRERA GONZALEZ 5C DSM</h1>
        <p>
          Prepárate para jugar sin límites.
          En Xbox encontrarás los mejores juegos, ofertas exclusivas y experiencias que llevan el gaming al siguiente nivel,ya sea que busques acción, aventura, deportes o mundos abiertos increíbles, aquí hay algo hecho para ti.
          Descubre títulos legendarios, nuevos lanzamientos y contenido imperdible para tu consola,
          ctualizamos nuestro catálogo constantemente para que siempre tengas algo nuevo que jugar.
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

