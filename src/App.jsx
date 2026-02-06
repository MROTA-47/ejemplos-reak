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

function App() {
  const [seccion, setSeccion] = useState("inicio");

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="menu">
          {["inicio", "acerca", "productos", "galeria", "sucursales", "contacto"].map(
            (e) => (
              <button
                key={e}
                className={seccion === e ? "activo" : ""}
                onClick={() => setSeccion(e)}
              >
                {e.toUpperCase()}
              </button>
            )
          )}
        </nav>

        <div className="redes">
          <img src={whatsapp} alt="whatsapp" />
          <img src={youtube} alt="youtube" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="contenido">
        {seccion === "inicio" && <ContenedorCards />}
        {seccion === "acerca" && <Acerca />}
        {seccion === "productos" && <Productos />}
        {seccion === "galeria" && <Galeria />}
        {seccion === "sucursales" && <Sucursales />}
        {seccion === "contacto" && <Contacto />}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>OFERTAS EN TODOS LOS PRODUCTOS</p>
      </footer>
    </>
  );
}

export default App;