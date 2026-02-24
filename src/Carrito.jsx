import { useEffect, useState } from "react";
import { obtenerCarrito, eliminarDelCarrito } from "./Services/carritoService";

function Carrito() {
  const [carritos, setCarritos] = useState([]);

  useEffect(() => {
    cargarCarritos();
  }, []);

  const cargarCarritos = async () => {
    try {
      const res = await obtenerCarrito();
      setCarritos(res.data);
    } catch (error) {
      console.error("Error al cargar carritos", error);
    }
  };

  const eliminar = async (id) => {
    try {
      await eliminarDelCarrito(id);
      cargarCarritos();
    } catch (error) {
      console.error("Error al eliminar carrito", error);
    }
  };

  return (
    <section className="seccion">
      <h2>Carrito de compras</h2>

      <div className="contenedor-carritos">
        {carritos.map((carrito) => (
          <div key={carrito.id} className="card-carrito">
            <h4>ID: {carrito.id}</h4>
            <p className="fecha">{carrito.date}</p>

            <h5>Productos</h5>
            <ul>
              {carrito.products.map((prod, index) => (
                <li key={index}>
                  Producto ID {prod.productId} — Cantidad {prod.quantity}
                </li>
              ))}
            </ul>

            <button onClick={() => eliminar(carrito.id)}>
              Cancelar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carrito;