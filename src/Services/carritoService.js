import api from "./api";


export const obtenerCarrito = async () => {
  try {
    console.log(" Llamando API Carritos...");

    const response = await api.get("carts");

    console.log(" Carritos recibidos:", response.data);

    return response.data;
  } catch (error) {
    console.error(" Error al obtener carritos:", error);
    throw error;
  }
};

export const eliminarDelCarrito = async (id) => {
  try {
    console.log("🗑 Eliminando carrito ID:", id);

    const response = await api.delete(`carts/${id}`);

    console.log(" Carrito eliminado:", response.data);

    return response.data;
  } catch (error) {
    console.error(" Error al eliminar carrito:", error);
    throw error;
  }
};

// ➕ Crear carrito
export const crearCarrito = async (carrito) => {
  try {
    console.log(" Creando carrito:", carrito);

    const response = await api.post("carts", carrito);

    console.log(" Carrito creado:", response.data);

    return response.data;
  } catch (error) {
    console.error(" Error al crear carrito:", error);
    throw error;
  }
};