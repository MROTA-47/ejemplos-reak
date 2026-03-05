import { useState } from "react";
import api from "./Services/api";
import "./RegistrarProductos.css";

function RegistrarUsuario() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {


      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      usuarios.push({
        username: firstname.toLowerCase(),
        password: "123456"
      });

      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      const nuevoUsuario = {
        email,
        username: firstname.toLowerCase(),
        password: "123456",
        name: {
          firstname,
          lastname,
        },
        address: {
          city,
          street,
          number: Number(number),
          zipcode: "00000",
          geolocation: {
            lat: "0",
            long: "0",
          },
        },
        phone,
      };

      const response = await api.post("users", nuevoUsuario);

      console.log(response.data);

      alert("Usuario registrado correctamente ✅");

      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setCity("");
      setStreet("");
      setNumber("");

    } catch (error) {

      console.error(error);
      alert("Error al registrar usuario ❌");

    }

  };

  return (

    <div className="registro-container">

      <h2>Registrar Usuario</h2>

      <form onSubmit={handleSubmit} className="registro-form">

        <input
          type="text"
          placeholder="Nombre"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Apellido"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Calle"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <button type="submit">
          Registrar Usuario
        </button>

      </form>

    </div>

  );
}

export default RegistrarUsuario;