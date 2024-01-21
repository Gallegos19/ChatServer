import { getChatPrivado,getbyIdChatPrivado, PostChatPrivado, putChatPrivado, DeleteChatPrivado } from "../repositories/chatPrivado.repositories.js";
// import { getNombreFestividadesDto } from "../dtos/getFestividades.dtos.js";
import { validarChat, validarChatParcial } from "../validations/chatPrivado.validation.js";
export const getOfChatPrivado = async () => {
  try {
    const result = await getChatPrivado();
    return (result[0]);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getIdChatPrivado = async (id) => {
  try {
    const result = await getbyIdChatPrivado(id);
    console.log(result);
    return (result[0]);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const PostofChat = async (chat) => {
   
    const {nombre} = chat
    try {
      const chatvalidator = validarChat(chat)
      if(chatvalidator.success) {
        const result = await PostChatPrivado(nombre);
        return result[0];
      }else{
        throw new Error (festivalidator.error.message)
      }
       
     
    } catch (err) {
      throw new Error(err.message);
    }
  };

export const put_ChatPrivado = async (chatput, id) => {
    try {
        const validationChat= validarChatParcial(chatput)
        if (validationChat.success) {
            const originalChat = await getbyIdChatPrivado(id)
            const FestividadChat ={...originalChat[0], ...validationChat.data}
            const {nombre} = FestividadChat;
            const Chat = await putChatPrivado(id, nombre)
        return Chat
        } else {
            throw new Error (validationChat.error.message)
        }
        
    } catch (error) {
        throw error;
    }
}
export const delete_ChatPrivado_Service = async (id) => {
    try {
        const Chat= await DeleteChatPrivado(id);
        return Chat;
    } catch (error) {
        throw error;
    }
}