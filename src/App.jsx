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

function App() {
  const [seccion, setSeccion] = useState("inicio");
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="menu">
          {[
            "inicio",
            "acerca",
            "productos",
            "carrito",
            "registrar", 
            "galeria",
            "sucursales",
            "contacto",
            "ubicacion",
            "mapalatitud",
            "clima",
            "usuarios",
          ].map((e) => (
            <button
              key={e}
              className={seccion === e ? "activo" : ""}
              onClick={() => setSeccion(e)}
            >
              {e.toUpperCase()}
            </button>
          ))}
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
        {seccion === "productos" && (
          <Productos agregarAlCarrito={agregarAlCarrito} />
        )}
        {seccion === "carrito" && (
          <Carrito carrito={carrito} eliminarProducto={eliminarProducto} />
        )}
        {seccion === "registrar" && <RegistrarProductos />} {}
        {seccion === "galeria" && <Galeria />}
        {seccion === "sucursales" && <Sucursales />}
        {seccion === "contacto" && <Contacto />}
        {seccion === "ubicacion" && <UbicacionMapa />}
        {seccion === "mapalatitud" && <MapaLatitud />}
        {seccion === "clima" && <Clima />}
        {seccion === "usuarios" && <Usuarios />}
      </main>

      <footer className="footer">
        <p>OFERTAS EN TODOS LOS PRODUCTOS</p>
      </footer>
    </>
  );
}

export default App;