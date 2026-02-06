import "./Galeria.css";

import g1 from "./galeria1.png";
import g2 from "./galeria2.png";
import g3 from "./galeria3.png";
import g4 from "./galeria4.png";
import g5 from "./galeria5.png";
import g6 from "./galeria6.png";

function Galeria() {
  return (
    <section className="seccion galeria-seccion">
      <h2>Galería & Precios</h2>

      <div className="galeria">
        <div className="card-galeria">
          <img src={g1} alt="Sonic Frontiers" />
          <div className="card-info">
            <h3>SONIC FRONTIERS</h3>
            <p>SONIC FRONTIERS</p>
            <span className="precio">$1,200 MXN</span>
          </div>
        </div>

        <div className="card-galeria">
          <img src={g2} alt="Knuckles Chaotix" />
          <div className="card-info">
            <h3>KNUCKLES CHAOTRIX</h3>
            <p>KNUCKLES CHAOTRIX</p>
            <span className="precio">$1,800 MXN</span>
          </div>
        </div>

        <div className="card-galeria">
          <img src={g3} alt="Tails Adventure" />
          <div className="card-info">
            <h3>TAILS ADVENTURE</h3>
            <p>TAILS ADVENTURE</p>
            <span className="precio">$2,500 MXN</span>
          </div>
        </div>

        <div className="card-galeria">
          <img src={g4} alt="Sonic Mania" />
          <div className="card-info">
            <h3>SONIC MANIA</h3>
            <p>SONIC MANIA</p>
            <span className="precio">$3,200 MXN</span>
          </div>
        </div>

        <div className="card-galeria">
          <img src={g5} alt="Sonic Superstars" />
          <div className="card-info">
            <h3>SONIC SUPERSTARS</h3>
            <p>SONIC SUPERSTARS</p>
            <span className="precio">$1,500 MXN</span>
          </div>
        </div>

        <div className="card-galeria">
          <img src={g6} alt="Sonic Generations" />
          <div className="card-info">
            <h3>SONIC GENERATIONS</h3>
            <p>SONIC GENERATIONS</p>
            <span className="precio">Desde $4,000 MXN</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeria;