import { useEffect, useState } from "react";
import "./Clima.css";

function Clima() {
  const [clima, setClima] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const lat = 20.23839029473205;
  const lng = -97.9570924237674;

  useEffect(() => {
    if (!API_KEY) {
      setError("API KEY no detectada");
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`
    )
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message);
        }
        return data;
      })
      .then((data) => {
        setClima(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [API_KEY]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!clima) {
    return <h2>Cargando clima...</h2>;
  }

  return (
    <div className="clima-container">
      <h1>Clima actual</h1>
      <h2>{clima.name}</h2>
      <p>Temperatura: {clima.main.temp}°C</p>
      <p>Sensación térmica: {clima.main.feels_like}°C</p>
      <p>Estado: {clima.weather[0].description}</p>
      <p>Humedad: {clima.main.humidity}%</p>
      <p>Viento: {clima.wind.speed} m/s</p>
    </div>
  );
}

export default Clima;