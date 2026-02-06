import Tarjeta from "./Tarjeta";

import cod from "./assets/Call-of-Duty-Logo-2012.png";
import gears from "./assets/gears-of-war-logo-vector-1.png";
import halo from "./assets/halo-reach-logo-1-logo.png";

function ContenedorCards() {
  return (
    <div className="contenedor-cards">
      <Tarjeta img={cod} titulo="Call of Duty" />
      <Tarjeta img={gears} titulo="Gears of War" />
      <Tarjeta img={halo} titulo="Halo Reach" />
    </div>
  );
}

export default ContenedorCards;