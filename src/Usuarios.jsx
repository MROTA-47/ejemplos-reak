import { useEffect, useState } from "react";
import api from "./Services/api";
import "./Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    try {
      const response = await api.get("users");
      setUsuarios(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioAgregado = {
      id: usuarios.length + 1,
      name: {
        firstname: nuevoUsuario.firstname,
        lastname: nuevoUsuario.lastname
      },
      address: {
        city: nuevoUsuario.city,
        street: nuevoUsuario.street,
        number: nuevoUsuario.number
      },
      phone: nuevoUsuario.phone,
      email: nuevoUsuario.email
    };

    setUsuarios([...usuarios, usuarioAgregado]);

    setNuevoUsuario({
      firstname: "",
      lastname: "",
      city: "",
      street: "",
      number: "",
      phone: "",
      email: ""
    });
  };

  const eliminarUsuario = (id) => {
    const usuariosFiltrados = usuarios.filter((user) => user.id !== id);
    setUsuarios(usuariosFiltrados);
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Cargando usuarios...</h2>;
  }

  return (
    <div className="usuarios-container">
      <h1 className="usuarios-titulo">USUARIOS</h1>

      <form className="form-usuario" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="Nombre"
          value={nuevoUsuario.firstname}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="Apellidos"
          value={nuevoUsuario.lastname}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="Ciudad"
          value={nuevoUsuario.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="street"
          placeholder="Calle"
          value={nuevoUsuario.street}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="number"
          placeholder="Número"
          value={nuevoUsuario.number}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={nuevoUsuario.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={nuevoUsuario.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Agregar Usuario</button>
      </form>

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name?.firstname}</td>
              <td>{user.name?.lastname}</td>
              <td>
                {user.address?.city}, {user.address?.street}{" "}
                {user.address?.number}
              </td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarUsuario(user.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;