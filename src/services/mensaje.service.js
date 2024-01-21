import { getMensaje,getbyIdMensaje, PostUMensaje, putMensaje, DeleteMensaje } from "../repositories/mensaje.repositories.js";
// import { getNombreFestividadesDto } from "../dtos/getFestividades.dtos.js";
import { validarMensaje, validarMensajeParcial } from "../validations/mensaje.validation.js";
export const getOfMensaje = async () => {
  try {
    const result = await getMensaje();
    return (result[0]);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getIdMensaje = async (id) => {
  try {
    const result = await getbyIdMensaje(id);
    console.log(result);
    return (result[0]);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const PostofMensaje = async (mensajes) => {
   
    const {mensaje, fecha, idUsuario, idChatPrivado} = mensajes
    try {
      const mensajevalidator = validarMensaje(mensajes)
      if(mensajevalidator.success) {
        const result = await PostUMensaje(mensaje, fecha, idUsuario, idChatPrivado);
        return result[0];
      }else{
        throw new Error (mensajevalidator.error.message)
      }
       
     
    } catch (err) {
      throw new Error(err.message);
    }
  };

export const put_Mensaje = async (Mensajeput, id) => {
    try {
        const validationMensaje= validarMensajeParcial(Mensajeput)
        if (validationMensaje.success) {
            const originalMensaje = await getbyIdMensaje(id)
            const mensajeRemplazo ={...originalMensaje[0], ...validationMensaje.data}
            const {mensaje} = mensajeRemplazo;
            const Mensajes = await putMensaje(id, mensaje)
        return Mensajes
        } else {
            throw new Error (validationMensaje.error.message)
        }
        
    } catch (error) {
        throw error;
    }
}
export const delete_Mensaje_Service = async (id) => {
    try {
        const Chat= await DeleteMensaje(id);
        return Chat;
    } catch (error) {
        throw error;
    }
}