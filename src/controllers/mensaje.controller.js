import { getOfMensaje, getIdMensaje, delete_Mensaje_Service, PostofMensaje, put_Mensaje} from "../services/mensaje.service.js";

export const getMensajes = async (req, res) => {
  try {
    const result = await getOfMensaje();
    return res.status(200).json({
      message: "¡Mensajes obtenidos correctamente!",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const getbyIdMensaje = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await getIdMensaje(id);

    return res.status(200).json({
      message: "¡Funciona correctamente!",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const PostMensajes = async (req, res) => {
    try {
      const data = req.body
      const result = await PostofMensaje(data);
  
      return res.status(201).json({
        message: "¡Funciona correctamente!",
        
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  export const putMensajeControlller = async (req, res) => {
    try {
        const {id} = req.params;
        const msj = req.body;
      
        put_Mensaje(msj, id)
  
      return res.status(201).json({
        message: "¡Funciona correctamente!",
        
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  export const deleteMensajeControlller = async (req, res) => {
    try {
        const {id} = req.params;
        delete_Mensaje_Service(id);
  
      return res.status(201).json({
        message: "¡Funciona correctamente!",
        
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };
  
  
