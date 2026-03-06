import { useAuth } from "./context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir
import "./Login.css";
import logo from "./assets/logo.jpg";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [recordar, setRecordar] = useState(false);


  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario_recordado");
    if (usuarioGuardado) {
      setUsername(usuarioGuardado);
      setRecordar(true);
    }
  }, []);

  const iniciarSesion = (e) => {
    e.preventDefault();

  
    if (username === "Admin" && password === "123456") {
      const fakeToken = "token123456fake";

    
      login(fakeToken);

      if (recordar) {
        localStorage.setItem("usuario_recordado", username);
      } else {
        localStorage.removeItem("usuario_recordado");
      }

      alert("¡Bienvenido de nuevo!");
      
     
      navigate("/home"); 

    } else {
      alert("Usuario o contraseña incorrectos. Intenta con Admin / 123456");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="logo" className="login-logo" />

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

        <div className="recordar">
          <input
            type="checkbox"
            id="checkRecordar"
            checked={recordar}
            onChange={(e) => setRecordar(e.target.checked)}
          />
          <label htmlFor="checkRecordar">Recordar cuenta</label>
        </div>

        <button type="submit" className="btn-login">
          Acceder
        </button>

        <div className="login-links">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;