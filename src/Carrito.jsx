import { useEffect, useState } from "react";
import {
  obtenerCarrito,
  eliminarDelCarrito,
  crearCarrito,
} from "./Services/carritoService";
import "./Carrito.css";

function Carrito({ carritoLocal = [], setCarritoLocal }) {
  const [carritos, setCarritos] = useState([]);
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    cargarCarritos();
  }, []);

  const cargarCarritos = async () => {
    try {
      const res = await obtenerCarrito();
      setCarritos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const crearNuevoCarrito = async (e) => {
    e.preventDefault();

    const nuevoCarrito = {
      userId: Number(userId),
      date: new Date(),
      products: [
        {
          productId: Number(productId),
          quantity: Number(quantity),
        },
      ],
    };

    try {
      await crearCarrito(nuevoCarrito);
      cargarCarritos();
      setUserId("");
      setProductId("");
      setQuantity("");
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarBackend = async (id) => {
    try {
      await eliminarDelCarrito(id);
      cargarCarritos();
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarLocal = (index) => {
    const nuevoCarrito = carritoLocal.filter((_, i) => i !== index);
    setCarritoLocal(nuevoCarrito);
  };

  const totalLocal = carritoLocal.reduce(
    (acc, item) => acc + Number(item.precio),
    0
  );

  return (
    <section className="carrito-section">
      <h2>Carrito de Compras</h2>

      <h3>Carrito Local</h3>

      {carritoLocal.length === 0 && (
        <p>No hay productos agregados</p>
      )}

      {carritoLocal.map((item, index) => (
        <div key={index} className="carrito-local-item">
          <p>
            {item.nombre} - ${item.precio}
          </p>

          <button
            className="btn-eliminar"
            onClick={() => eliminarLocal(index)}
          >
            Eliminar
          </button>
        </div>
      ))}

      {carritoLocal.length > 0 && (
        <h4>Total: ${totalLocal.toFixed(2)}</h4>
      )}

      <hr />

      <h3>Crear Carrito (Backend API)</h3>

      <form className="carrito-form" onSubmit={crearNuevoCarrito}>
        <input
          type="number"
          placeholder="ID Usuario"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ID Producto"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Agregar</button>
      </form>

      <div className="carrito-grid">
        {carritos.map((carrito) => (
          <div key={carrito.id} className="carrito-card">
            <div className="carrito-header">
              <span>ID: {carrito.id}</span>
              <span>
                {new Date(carrito.date).toLocaleDateString()}
              </span>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {carrito.products.map((prod, index) => (
                  <tr key={index}>
                    <td>{prod.productId}</td>
                    <td>{prod.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              className="btn-eliminar"
              onClick={() => eliminarBackend(carrito.id)}
            >
              Cancelar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carrito;