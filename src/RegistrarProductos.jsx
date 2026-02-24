import { useState } from "react";
import api from "./Services/api";
import "./RegistrarProductos.css";

function RegistrarProductos() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const nuevoProducto = {
        title,
        price: parseFloat(price),
        description,
        category,
        image,
      };

      const response = await api.post("products", nuevoProducto);

      alert("Producto registrado correctamente ");
      console.log(response.data);

      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setImage("");

    } catch (error) {
      console.error(error);
      alert("Error al registrar ");
    }
  };

  return (
    <div className="registro-container">
      <h2>Registrar Producto</h2>

      <form onSubmit={handleSubmit} className="registro-form">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="URL Imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistrarProductos;