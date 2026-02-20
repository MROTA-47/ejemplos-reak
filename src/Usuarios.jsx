import { useEffect, useState } from "react";
import "./Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="usuarios-container">
      <h1 className="usuarios-titulo">USUARIOS</h1>

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
              <td>
                {user.address.city}, {user.address.street}{" "}
                {user.address.number}
              </td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn-editar">✏️</button>
              </td>
              <td>
                <button className="btn-eliminar">❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;