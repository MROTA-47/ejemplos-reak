import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./MapaLatitud.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function MapaLatitud() {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [posicion, setPosicion] = useState(null);

  const mostrarUbicacion = () => {
    if (lat === "" || lng === "") {
      alert("Ingresa latitud y longitud");
      return;
    }

    setPosicion({
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    });
  };

  return (
    <div className="mapa-latitud">
      <h2>Buscar por Latitud y Longitud</h2>

      <div className="inputs">
        <input
          type="number"
          placeholder="Latitud"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />

        <input
          type="number"
          placeholder="Longitud"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />

        <button onClick={mostrarUbicacion}>
          Mostrar en mapa
        </button>
      </div>

      {posicion && (
        <LoadScript googleMapsApiKey="TU_API_KEY_AQUI">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={posicion}
            zoom={15}
          >
            <Marker position={posicion} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
}

export default MapaLatitud;