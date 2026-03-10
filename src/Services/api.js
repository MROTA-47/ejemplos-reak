import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((request) => {
  console.log("Enviando petición a:", request.url);
  return request;
});

api.interceptors.response.use(
  (response) => {
    console.log("Respuesta recibida:", response);
    return response;
  },
  (error) => {
    console.error("Error en la API:", error);
    return Promise.reject(error);
  }
);

export default api;