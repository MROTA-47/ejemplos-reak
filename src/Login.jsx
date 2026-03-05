import { useAuth } from "./context/AuthContext";
import { useState } from "react";

function Login() {

  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = (e) => {
    e.preventDefault();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioValido = usuarios.find(
      (u) => u.username === username && u.password === password
    );

    if (usuarioValido) {

      login();
      alert("Inicio de sesión correcto ✅");

    } else {

      alert("Usuario incorrecto ❌");

    }
  };

  return (
    <div className="login">

      <h2>Iniciar Sesión</h2>

      <form onSubmit={iniciarSesion}>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>

      </form>

    </div>
  );
}

export default Login;