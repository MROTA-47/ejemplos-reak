import api from "./Services/api";
import { useEffect, useState } from "react";
import "./Productos.css";

function Productos({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [nuevoProducto, setNuevoProducto] = useState({
    title: "",
    price: "",
    description: "",
    imagenPersonalizada: ""
  });

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

  const handleChange = (e) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productoAgregado = {
      id: productos.length + 1,
      title: nuevoProducto.title,
      description: nuevoProducto.description,
      price: parseFloat(nuevoProducto.price),
      imagenPersonalizada: nuevoProducto.imagenPersonalizada
    };

    setProductos([...productos, productoAgregado]);

    setNuevoProducto({
      title: "",
      price: "",
      description: "",
      imagenPersonalizada: ""
    });
  };

  const eliminarProducto = (id) => {
    const productosFiltrados = productos.filter(
      (producto) => producto.id !== id
    );
    setProductos(productosFiltrados);
  };

  if (loading) return <p className="loading">Cargando...</p>;

  return (
    <div className="productos-container">
      <h2>Mis Productos</h2>

      <form className="form-producto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Nombre del producto"
          value={nuevoProducto.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={nuevoProducto.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="imagenPersonalizada"
          placeholder="URL de la imagen"
          value={nuevoProducto.imagenPersonalizada}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={nuevoProducto.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Agregar Producto</button>
      </form>

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

            <button
              className="btn-carrito"
              onClick={() =>
                agregarAlCarrito &&
                agregarAlCarrito({
                  id: producto.id,
                  nombre: producto.title,
                  precio: producto.price,
                })
              }
            >
              Agregar al carrito
            </button>

            <button
              className="btn-eliminar-producto"
              onClick={() => eliminarProducto(producto.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;