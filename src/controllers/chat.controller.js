import { getOfChatPrivado, getIdChatPrivado, PostofChat, put_ChatPrivado, delete_ChatPrivado_Service} from "../services/chat.service.js";

export const getChatPrivado = async (req, res) => {
  try {
    const result = await getOfChatPrivado();

    return res.status(200).json({
      message: "¡Funciona correctamente!",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const getbyIdChatPrivado = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await getIdChatPrivado(id);

    return res.status(200).json({
      message: "¡Funciona correctamente!",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const PostChatPrivado = async (req, res) => {
    try {
      const data = req.body
      const result = await PostofChat(data);
  
      return res.status(201).json({
        message: "¡Funciona correctamente!",
        
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  export const putChatPrivadoControlller = async (req, res) => {
    try {
        const {id} = req.params;
        const chat = req.body;
      
        put_ChatPrivado(chat, id)
  
      return res.status(201).json({
        message: "¡Funciona correctamente!",
        
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  export const deleteChatPrivadoControlller = async (req, res) => {
    try {
        const {id} = req.params;
        delete_ChatPrivado_Service(id);
  
      return res.status(201).json({
        message: "¡Funciona correctamente!",
        
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };
  
  
