import { Router } from "express";
import { getMensajes, getbyIdMensaje, PostMensajes,putMensajeControlller, deleteMensajeControlller } from "../controllers/mensaje.controller.js";
import { verificarJWT } from "../middleware/auth.middleware.js";
const chatRoute = Router();

chatRoute.get('/', getMensajes)
chatRoute.get('/:id', getbyIdMensaje)
chatRoute.post('/', verificarJWT, PostMensajes)
chatRoute.put('/:id',verificarJWT, putMensajeControlller )
chatRoute.delete('/:id',verificarJWT, deleteMensajeControlller)
export default chatRoute;
              