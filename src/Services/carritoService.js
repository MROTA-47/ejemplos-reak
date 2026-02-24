import api from "./api";

export const obtenerCarrito = () => {
  return api.get("carts");
};

export const eliminarDelCarrito = (id) => {
  return api.delete(`carts/${id}`);
};