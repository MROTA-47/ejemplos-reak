import { useState } from "react";
import "./App.css";

import logo from "./assets/logo.jpg";
import whatsapp from "./assets/whatsapp.png";
import youtube from "./assets/youtube.png";
import linkedin from "./assets/linkedin.png";

import ContenedorCards from "./ContenedorCards";
import Acerca from "./Acerca";
import Productos from "./Productos";
import Galeria from "./Galeria";
import Sucursales from "./Sucursales";
import Contacto from "./Contacto";
import UbicacionMapa from "./UbicacionMapa";
import MapaLatitud from "./MapaLatitud";
import Clima from "./Clima";
import Usuarios from "./Usuarios";
import Carrito from "./Carrito";
import RegistrarProductos from "./RegistrarProductos";
import RegistrarUsuario from "./RegistrarUsuario";
import Login from "./Login";
import Categorias from "./Categorias";

import { useAuth } from "./context/AuthContext";

function App() {

  const [seccion, setSeccion] = useState("inicio");

  const { isLoggedIn, logout } = useAuth();

  return (
    <>
      <header className="header">

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="menu">

          <button onClick={() => setSeccion("inicio")}>INICIO</button>
          <button onClick={() => setSeccion("acerca")}>ACERCA</button>

          {!isLoggedIn && (
            <>
              <button onClick={() => setSeccion("login")}>LOGIN</button>
              <button onClick={() => setSeccion("registrarUsuario")}>REGISTRAR</button>
            </>
          )}

          {isLoggedIn && (
            <>
              <button onClick={() => setSeccion("productos")}>PRODUCTOS</button>
              <button onClick={() => setSeccion("carrito")}>CARRITO</button>
              <button onClick={() => setSeccion("registrar")}>REGISTRAR</button>
              <button onClick={() => setSeccion("galeria")}>GALERIA</button>
              <button onClick={() => setSeccion("sucursales")}>SUCURSALES</button>
              <button onClick={() => setSeccion("contacto")}>CONTACTO</button>
              <button onClick={() => setSeccion("ubicacion")}>UBICACION</button>
              <button onClick={() => setSeccion("mapalatitud")}>MAPA</button>
              <button onClick={() => setSeccion("clima")}>CLIMA</button>
              <button onClick={() => setSeccion("usuarios")}>USUARIOS</button>
              <button onClick={() => setSeccion("categorias")}>CATEGORIAS</button>

              <button onClick={logout}>LOGOUT</button>
            </>
          )}

        </nav>

        <div className="redes">
          <img src={whatsapp} alt="whatsapp" />
          <img src={youtube} alt="youtube" />
          <img src={linkedin} alt="linkedin" />
        </div>

      </header>

      <main className="contenido">

        {seccion === "inicio" && <ContenedorCards />}
        {seccion === "acerca" && <Acerca />}

        {!isLoggedIn && seccion === "login" && <Login />}
        {!isLoggedIn && seccion === "registrarUsuario" && <RegistrarUsuario />}

        {isLoggedIn && seccion === "productos" && <Productos />}
        {isLoggedIn && seccion === "carrito" && <Carrito />}
        {isLoggedIn && seccion === "registrar" && <RegistrarProductos />}
        {isLoggedIn && seccion === "galeria" && <Galeria />}
        {isLoggedIn && seccion === "sucursales" && <Sucursales />}
        {isLoggedIn && seccion === "contacto" && <Contacto />}
        {isLoggedIn && seccion === "ubicacion" && <UbicacionMapa />}
        {isLoggedIn && seccion === "mapalatitud" && <MapaLatitud />}
        {isLoggedIn && seccion === "clima" && <Clima />}
        {isLoggedIn && seccion === "usuarios" && <Usuarios />}
        {isLoggedIn && seccion === "categorias" && <Categorias />}

      </main>

      <footer className="footer">
        <p>OFERTAS EN TODOS LOS PRODUCTOS</p>
      </footer>

    </>
  );
}

export default App;