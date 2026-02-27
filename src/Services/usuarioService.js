import api from "./api";


export const obtenerUsuarios = async () => {
  try {
    console.log("Llamando API Usuarios...");
    const response = await api.get("users");
    console.log("Usuarios recibidos:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
};


export const crearUsuario = async (data) => {
  try {
    const response = await api.post("users", data);
    console.log("Usuario creado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};

export const actualizarUsuario = async (id, data) => {
  try {
    const response = await api.put(`users/${id}`, data);
    console.log("Usuario actualizado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    throw error;
  }
};

export const eliminarUsuarioApi = async (id) => {
  try {
    const response = await api.delete(`users/${id}`);
    console.log("Usuario eliminado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    throw error;
  }
};