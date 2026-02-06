import Tarjeta from "./Tarjeta";
import cod from "./assets/Call-of-Duty-Logo-2012.png";
import halo from "./assets/halo-reach-logo-1-logo.png";
import gears from "./assets/gears-of-war-logo-vector-1.png";

function ContenedorCards() {
  return (
    <div className="contenedor-cards">
      <Tarjeta
        imagen={cod}
        nombre="CALL OF DUTY"
        descripcion="Shooter bélico de acción intensa"
      />
      <Tarjeta
        imagen={halo}
        nombre="HALO"
        descripcion="Ciencia ficción y combate futurista"
      />
      <Tarjeta
        imagen={gears}
        nombre="GEARS OF WAR"
        descripcion="Acción táctica en tercera persona"
      />
    </div>
  );
}

export default ContenedorCards;