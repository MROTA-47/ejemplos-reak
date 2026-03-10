import { useState, useEffect } from "react";
import "./Categorias.css";
import Card1 from "./Card1";

function Categorias() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {

    try {

      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      const data = await response.json();

      console.log("DATOS API:", data);

      setCategorias(data.categories);

    } catch (error) {

      console.log("Error:", error);

    }

  };

  return (
    <div className="categorias-container">

      <h2>Categorías </h2>

      <div className="cards-container">

        {categorias.map((cat) => (

          <Card1
            key={cat.idCategory}
            nombre={cat.strCategory}
            imagen={cat.strCategoryThumb}
            descripcion={cat.strCategoryDescription}
          />

        ))}

      </div>

    </div>
  );
}

export default Categorias;