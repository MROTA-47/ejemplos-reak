import { useState, useEffect } from "react";
import Encabezado from "../encabezado";
import Productos from "../Productos";
import Usuarios from "../Usuarios";
import Carrito from "../Carrito";

function App() {
  const [vista, setVista] = useState("inicio");
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    console.log("Vista actual:", vista);
  }, [vista]);

  const agregarAlCarrito = (producto) => {
    console.log("Producto agregado:", producto);
    setCarrito((prev) => [...prev, producto]);
  };

  return (
    <>
      <Encabezado cambiarVista={setVista} />

      {vista === "inicio" && <h1>Bienvenido</h1>}

      {vista === "productos" && (
        <Productos agregarAlCarrito={agregarAlCarrito} />
      )}

      {vista === "usuarios" && <Usuarios />}

      {vista === "carrito" && <Carrito carritoLocal={carrito} />}
    </>
  );
}

export default App;