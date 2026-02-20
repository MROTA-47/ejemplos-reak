import api from "./Services/api";
import { useEffect, useState } from "react";
import "./Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await api.get("products");

        const primerosTres = response.data.slice(0, 3);

        const imagenes = [
          "/producto1.png",
          "/producto2.png",
          "/producto3.png",
        ];

        const productosConImagen = primerosTres.map((producto, index) => ({
          ...producto,
          imagenPersonalizada: imagenes[index],
        }));

        setProductos(productosConImagen);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  if (loading) return <p className="loading">Cargando...</p>;

  return (
    <div className="productos-container">
      <h2>Mis Productos</h2>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={producto.imagenPersonalizada}
              alt={producto.title}
              className="producto-img"
            />
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
            <span className="precio">${producto.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;