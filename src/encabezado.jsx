import logo from "./assets/logo.jpg";
import imgWhats from "./assets/whatsapp.png";
import imgYoutube from "./assets/youtube.png";
import imgLinkedin from "./assets/linkedin.png";

function Encabezado() {
  return (
    <header className="barra-superior">

      {}
      <div className="logo-izq">
        <img src={logo} alt="Logo" />
      </div>

      {}
      <div className="menu-cuadro">
        <ul>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Productos</li>
          <li>Contactos</li>
          <li>Sucursales</li>
        </ul>

        <div className="redes-der">
          <img src={imgWhats} alt="WhatsApp" />
          <img src={imgYoutube} alt="YouTube" />
          <img src={imgLinkedin} alt="LinkedIn" />
        </div>
      </div>

    </header>
  );
}

export default Encabezado;