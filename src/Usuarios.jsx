import { useEffect, useState } from "react";
import {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuarioApi
} from "./Services/usuarioService";

import "./Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editandoId, setEditandoId] = useState(null);

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
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const data = await obtenerUsuarios();
      setUsuarios(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataUsuario = {
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

    try {
      if (editandoId) {
        await actualizarUsuario(editandoId, dataUsuario);
        setEditandoId(null);
      } else {
        await crearUsuario(dataUsuario);
      }

      await cargarUsuarios();

      setNuevoUsuario({
        firstname: "",
        lastname: "",
        city: "",
        street: "",
        number: "",
        phone: "",
        email: ""
      });

    } catch (error) {
      console.error("Error en submit:", error);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await eliminarUsuarioApi(id);
      await cargarUsuarios();
    } catch (error) {
      console.error("Error eliminando:", error);
    }
  };

  const editarUsuario = (id) => {
    const usuario = usuarios.find((user) => user.id === id);

    setNuevoUsuario({
      firstname: usuario.name?.firstname || "",
      lastname: usuario.name?.lastname || "",
      city: usuario.address?.city || "",
      street: usuario.address?.street || "",
      number: usuario.address?.number || "",
      phone: usuario.phone || "",
      email: usuario.email || ""
    });

    setEditandoId(id);
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Cargando usuarios...</h2>;
  }

  return (
    <div className="usuarios-container">
      <h1 className="usuarios-titulo">USUARIOS</h1>

      <form className="form-usuario" onSubmit={handleSubmit}>
        <input name="firstname" placeholder="Nombre"
          value={nuevoUsuario.firstname} onChange={handleChange} required />

        <input name="lastname" placeholder="Apellidos"
          value={nuevoUsuario.lastname} onChange={handleChange} required />

        <input name="city" placeholder="Ciudad"
          value={nuevoUsuario.city} onChange={handleChange} required />

        <input name="street" placeholder="Calle"
          value={nuevoUsuario.street} onChange={handleChange} required />

        <input type="number" name="number" placeholder="Número"
          value={nuevoUsuario.number} onChange={handleChange} required />

        <input name="phone" placeholder="Teléfono"
          value={nuevoUsuario.phone} onChange={handleChange} required />

        <input type="email" name="email" placeholder="Email"
          value={nuevoUsuario.email} onChange={handleChange} required />

        <button type="submit">
          {editandoId ? "Actualizar Usuario" : "Agregar Usuario"}
        </button>
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
                {user.address?.city}, {user.address?.street} {user.address?.number}
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

                <button
                  className="btn-editar"
                  onClick={() => editarUsuario(user.id)}
                >
                  Editar
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