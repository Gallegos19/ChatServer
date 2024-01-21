import { Router } from "express";
import { getChatPrivado, getbyIdChatPrivado, PostChatPrivado,putChatPrivadoControlller, deleteChatPrivadoControlller } from "../controllers/chat.controller.js";
import { verificarJWT } from "../middleware/auth.middleware.js";
const chatRoute = Router();

chatRoute.get('/', getChatPrivado)
chatRoute.get('/:id', getbyIdChatPrivado)
chatRoute.post('/', verificarJWT, PostChatPrivado)
chatRoute.put('/:id',verificarJWT, putChatPrivadoControlller )
chatRoute.delete('/:id',verificarJWT, deleteChatPrivadoControlller)
export default chatRoute;
              