import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./UbicacionMapa.css";

function MapaGeolocalizacion() {
  const [ubicacion, setUbicacion] = useState(null);

  const activarUbicacion = () => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización");
      return;
    }

    navigator.geolocation.watchPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        alert("Debes permitir el acceso a la ubicación");
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );
  };

  return (
    <div className="mapa-container">
      <button className="btn-ubicacion" onClick={activarUbicacion}>
        📍 Ver mi ubicación en vivo
      </button>

      <LoadScript googleMapsApiKey="AIzaSyBb-xYdhgff-0J8eEEhnJqbThryotEPGW8">
        {ubicacion && (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "500px" }}
            center={ubicacion}
            zoom={18}
          >
            <Marker position={ubicacion} />
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
}

export default MapaGeolocalizacion;