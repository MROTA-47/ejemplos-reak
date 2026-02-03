import Tarjeta from "./Tarjeta";

import cod from "./assets/Call-of-Duty-Logo-2012.png";
import halo from "./assets/halo-reach-logo-1-logo.png";
import gears from "./assets/gears-of-war-logo-vector-1.png";

function ContenedorCards() {
  return (
    <section className="tarjetas">
      <Tarjeta
        imagen={cod}
        nombre="CALL OF DUTY"
        descripcion="Call of Duty es una franquicia de disparos en primera persona reconocida mundialmente."
      />

      <Tarjeta
        imagen={halo}
        nombre="HALO REACH"
        descripcion="Halo Reach es un FPS que cuenta la historia del Equipo Noble."
      />

      <Tarjeta
        imagen={gears}
        nombre="GEARS OF WAR"
        descripcion="Gears of War es una saga de disparos en tercera persona."
      />
    </section>
  );
}

export default ContenedorCards;