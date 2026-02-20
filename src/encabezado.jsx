import "./encabezado.css";
import panda from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";

function Encabezado({ cambiarVista }) {
  return (
    <header className="encabezado">
      <div className="menu-container">

        <img src={panda} alt="logo" className="logo" />

        <nav className="menu">
          <button onClick={() => cambiarVista("inicio")}>Inicio</button>
          <button onClick={() => cambiarVista("acerca")}>Acerca</button>
          <button onClick={() => cambiarVista("productos")}>Productos</button>
          <button onClick={() => cambiarVista("galeria")}>Galeria</button>
          <button onClick={() => cambiarVista("sucursales")}>Sucursales</button>
          <button onClick={() => cambiarVista("contacto")}>Contacto</button>
          <button onClick={() => cambiarVista("ubicacion")}>Ubicacion</button>
          <button onClick={() => cambiarVista("mapalatitud")}>MapaLatitud</button>
          <button onClick={() => cambiarVista("clima")}>Clima</button>
            <button onClick={() => cambiarVista("Usuarios")}>usuarios</button>
        </nav>

        <div className="redes">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={linkedin} alt="LinkedIn" />
        </div>

      </div>
    </header>
  );
}

export default Encabezado;