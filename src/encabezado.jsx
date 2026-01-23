import logo from './assets/logo.jpg';

function Encabezado() {
  return (
    <header>
      <h1>Encabezado</h1>

      <Logotipo />
      <Menu />
      <Redes />
    </header>
  );
}

function Logotipo() {
  return (
    <div className="logotipo">
      <img src={logo} alt="Logo" width="120" />
    </div>
  );
}

function Menu() {
  return (
    <nav>
      <ul>
        <li>Inicio</li>
        <li>Acerca de</li>
        <li>Productos</li>
        <li>Contactos</li>
        <li>Sucursales</li>
      </ul>
    </nav>
  );
}

function Redes() {
  return (
    <div className="redes">
      <ul>
        <li>WhatsApp</li>
        <li>YouTube</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  );
}

export default Encabezado;