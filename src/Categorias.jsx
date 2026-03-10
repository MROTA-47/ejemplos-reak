import { useState, useEffect } from "react";
import "./Categorias.css";
import api from "./apis/api";
import Card1 from "./Card1";

function Categorias() {

  const [categorias, setCategorias] = useState([]);
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    try {

      const response = await api.get("/products/categories");

      console.log("Categorias desde API:", response.data);

      setCategorias(response.data);

    } catch (error) {
      console.error("Error cargando categorias:", error);
    }
  };

  const agregarCategoria = () => {

    if (nuevaCategoria.trim() === "") return;

    setCategorias([...categorias, nuevaCategoria]);

    setNuevaCategoria("");
  };

  return (
    <div className="categorias-container">

      <h2>Categorías de productos</h2>

      <div className="categoria-form">

        <input
          type="text"
          placeholder="Nueva categoría"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
        />

        <button onClick={agregarCategoria}>
          Agregar
        </button>

      </div>

      <div className="cards-container">

        {categorias.map((cat, index) => (
          <Card1
            key={index}
            titulo={cat}
            descripcion={"Categoría disponible en la tienda"}
          />
        ))}

      </div>

    </div>
  );
}

export default Categorias;